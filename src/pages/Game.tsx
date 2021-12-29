import {
  FC,
  useContext,
  useEffect,
  useCallback,
  useRef,
  useState,
  useMemo,
} from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useDisclosure,
  Box,
  AspectRatio,
  Button,
  Text,
  Skeleton,
  useToast,
} from '@chakra-ui/react';
import * as cocossd from '@tensorflow-models/coco-ssd';
import { AuthContext } from '../features/auth/store';
import { Dialog } from '../components/common/Dialog';
import '@tensorflow/tfjs';
import { SearchIcon } from '../icons';
import { useBook } from '../features/books/bookHooks';
import { getFeatureFlag } from '../features/featureToggle';

type Handle = {
  text: string;
  action: () => Promise<void> | void;
};

export const GamePage: FC<{}> = () => {
  const [state] = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const toast = useToast();

  const wrapperEl = useRef<HTMLDivElement>(null);
  const videoEl = useRef<HTMLVideoElement>(null);
  const canvasEl = useRef<HTMLCanvasElement>(null);

  const [videoLoaded, setVideoLoaded] = useState(false);

  const wordName = useRef<undefined | string>(undefined);
  const streamRef = useRef<undefined | MediaStream>(undefined);
  const renderable = useRef(true);

  const [updateBook] = useBook();

  const updateClient = useCallback(async () => {
    if (!videoEl.current || !canvasEl.current || !wrapperEl.current) return;
    videoEl.current.width = wrapperEl.current.clientWidth;
    videoEl.current.height = wrapperEl.current.clientHeight;
    canvasEl.current.width = wrapperEl.current.clientWidth;
    canvasEl.current.height = wrapperEl.current.clientHeight;
  }, []);

  const draw = useCallback(
    async (
      coco: cocossd.ObjectDetection,
      video: HTMLVideoElement,
      canvas: HTMLCanvasElement,
    ) => {
      const ctx = canvas.getContext('2d');
      const predictions = await coco.detect(video);
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        predictions.forEach((prediction) => {
          const bbox = prediction.bbox;
          ctx.beginPath();
          ctx.lineWidth = 3;
          ctx.font = '24px sans-serif';
          ctx.strokeStyle = `hsl(${240 * (1 - prediction.score)},70%,70%)`;
          ctx.strokeRect(
            (bbox[0] * video.width) / video.videoWidth,
            (bbox[1] * video.height) / video.videoHeight,
            (bbox[2] * video.width) / video.videoWidth,
            (bbox[3] * video.height) / video.videoHeight,
          );
          ctx.fillText(
            `${prediction.class} ${(prediction.score * 100).toFixed(1)}%`,
            (bbox[0] * video.width) / video.videoWidth,
            (bbox[1] * video.height) / video.videoHeight - 24,
          );
        });

        if (predictions.length > 0) {
          const maxPrediction = predictions.reduce((a, b) =>
            a.score > b.score ? a : b,
          );
          ctx.beginPath();
          ctx.fillStyle = `rgba(${[0, 0, 125, 0.5]})`;
          ctx.fillRect(
            (maxPrediction.bbox[0] * video.width) / video.videoWidth,
            (maxPrediction.bbox[1] * video.height) / video.videoHeight,
            (maxPrediction.bbox[2] * video.width) / video.videoWidth,
            (maxPrediction.bbox[3] * video.height) / video.videoHeight,
          );
          wordName.current = maxPrediction.class;
        } else {
          wordName.current = undefined;
        }
      }
      if (renderable.current)
        window.requestAnimationFrame(() => draw(coco, video, canvas));
    },
    [renderable],
  );

  const modalHandles: Handle[] = useMemo(
    () => [
      {
        text: '探索を開始しますか？',
        action: async () => {
          const video = videoEl.current;
          const canvas = canvasEl.current;
          if (!canvas || !video) return;
          const coco = await cocossd.load({ base: 'mobilenet_v1' });
          video.play().then(() => setVideoLoaded(true));
          draw(coco, video, canvas);
        },
      },
      {
        text: 'ログインすることで辞書機能を利用できるようになります。',
        action: () => navigate('/setting'),
      },
    ],
    [navigate, draw],
  );

  const modalHandle = useRef<Handle>(modalHandles[0]);

  const setUp = useCallback(async () => {
    updateClient();
    const video = videoEl.current;

    if (!video) return;

    streamRef.current = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        facingMode: 'environment',
        width: 320,
        height: 240,
      },
    });
    video.srcObject = streamRef.current;

    video.onloadedmetadata = async () => {
      onOpen();
    };
  }, [onOpen, updateClient]);

  const submitWord = useCallback(() => {
    if (wordName.current === undefined) {
      toast({
        description: '単語を検知することができませんでした',
        status: 'error',
        isClosable: true,
        position: 'top',
      });
      return;
    }
    if (state.status !== 'success') {
      modalHandle.current = modalHandles[1];
      onOpen();
      return;
    }
    if (
      getFeatureFlag().shiritori &&
      state.user.wordList.length !== 0 &&
      state.user.wordList.slice(-1)[0].name.slice(-1) !==
        wordName.current.slice(0, 1)
    ) {
      toast({
        description: `「${state.user.wordList
          .slice(-1)[0]
          .name.slice(-1)
          .toUpperCase()}」から始まる英単語を探そう`,
        status: 'error',
        isClosable: true,
        position: 'top',
      });
      return;
    }
    if (state.user.wordList.find((word) => word.name === wordName.current)) {
      toast({
        description: 'その単語は既に登録されています',
        status: 'error',
        isClosable: true,
        position: 'top',
      });
      return;
    }

    const wordList = [
      { id: '1', name: wordName.current, collectedAt: new Date() },
    ];
    updateBook(wordList)
      .then(() => {
        toast({
          description: '単語を登録しました',
          status: 'success',
          isClosable: true,
          position: 'top',
        });
      })
      .catch(() => {
        toast({
          description: '単語の登録に失敗しました',
          status: 'error',
          isClosable: true,
        });
      });
  }, [state, modalHandles, wordName, onOpen, updateBook, toast]);

  useEffect(() => {
    setUp();
  }, [setUp]);

  useEffect(() => {
    const video = videoEl.current;
    return () => {
      renderable.current = false;
      video?.pause();
      streamRef.current?.getAudioTracks().forEach((track) => {
        track.stop();
      });
    };
  }, []);

  return (
    <>
      <Dialog
        content={modalHandle.current.text}
        isOpenDialog={isOpen}
        onCloseDialog={onClose}
        onOk={modalHandle.current.action}
      />

      <Box maxW="720px" mx="auto">
        {!videoLoaded && (
          <AspectRatio ratio={4 / 3}>
            <Skeleton h="100%" w="100%" />
          </AspectRatio>
        )}
        <AspectRatio
          ratio={4 / 3}
          ref={wrapperEl}
          visibility={videoLoaded ? 'visible' : 'hidden'}
        >
          <>
            <video ref={videoEl}></video>
            <canvas
              ref={canvasEl}
              style={{
                borderRadius: '0px 0px 32px 32px',
              }}
            ></canvas>
          </>
        </AspectRatio>
        {videoLoaded && (
          <Box m={4}>
            <Button
              _hover={{ bgColor: 'primary' }}
              bgColor="primary"
              borderColor="primary"
              borderRadius="32px"
              colorScheme="primary"
              leftIcon={<SearchIcon />}
              p={6}
              variant="outline"
              w="100%"
              onClick={submitWord}
            >
              <Text color="white" textStyle="title">
                Search
              </Text>
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
};
