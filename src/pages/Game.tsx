import {
  FC,
  useContext,
  useEffect,
  useCallback,
  useRef,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useDisclosure,
  Box,
  AspectRatio,
  Button,
  Text,
  Skeleton,
} from '@chakra-ui/react';
import * as cocossd from '@tensorflow-models/coco-ssd';
import { AuthContext } from '../features/auth/store';
import { Dialog } from '../components/common/Dialog';
import '@tensorflow/tfjs';
import { SearchIcon } from '../icons';
import { useBook } from '../features/books/bookHooks';

export const GamePage: FC<{}> = () => {
  const [state] = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const wrapperEl = useRef<HTMLDivElement>(null);
  const videoEl = useRef<HTMLVideoElement>(null);
  const canvasEl = useRef<HTMLCanvasElement>(null);

  const wordName = useRef<undefined | string>(undefined);
  const [videoLoaded, setVideoLoaded] = useState(false);

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
      const predictions = await coco.detect(canvas);

      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        predictions.forEach((prediction) => {
          const bbox = prediction.bbox;
          ctx.beginPath();
          ctx.lineWidth = 3;
          ctx.font = '24px sans-serif';
          ctx.fillStyle = `hsl(${240 * (1 - prediction.score)},70%,70%)`;
          ctx.strokeStyle = `hsl(${240 * (1 - prediction.score)},70%,70%)`;
          ctx.strokeRect(bbox[0], bbox[1], bbox[2], bbox[3]);
          ctx.fillText(
            `${prediction.class} ${(prediction.score * 100).toFixed(1)}%`,
            bbox[0],
            bbox[1] - 24,
          );
        });

        if (predictions.length > 0) {
          const maxPrediction = predictions.reduce((a, b) =>
            a.score > b.score ? a : b,
          );
          ctx.beginPath();
          ctx.fillStyle = `rgba(${[0, 0, 125, 0.5]})`;
          ctx.fillRect(
            maxPrediction.bbox[0],
            maxPrediction.bbox[1],
            maxPrediction.bbox[2],
            maxPrediction.bbox[3],
          );
          wordName.current = maxPrediction.class;
        } else {
          wordName.current = undefined;
        }
      }

      window.requestAnimationFrame(() => draw(coco, video, canvas));
    },
    [],
  );

  const setUp = useCallback(async () => {
    updateClient();
    const video = videoEl.current;
    const canvas = canvasEl.current;

    if (!canvas || !video) return;

    video.srcObject = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        facingMode: 'environment',
        aspectRatio: {
          exact: 3 / 4,
        },
      },
    });

    video.onloadedmetadata = async () => {
      const coco = await cocossd.load({ base: 'mobilenet_v1' });
      video.play().then(() => setVideoLoaded(true));
      draw(coco, video, canvas);
    };
  }, [draw, updateClient]);

  const submitWord = useCallback(() => {
    if (wordName.current === undefined) return;
    if (state.status === 'none') {
      onOpen();
      return;
    }
    const wordList = [
      { id: '1', name: wordName.current, collectedAt: new Date() },
    ];
    updateBook(wordList);
  }, [state, wordName, onOpen, updateBook]);

  useEffect(() => {
    setUp();
  }, [setUp]);

  return (
    <>
      <Dialog
        content="ログインすることで辞書機能を利用できるようになります。"
        isOpenDialog={isOpen}
        onCloseDialog={onClose}
        onOk={() => {
          navigate('/setting');
        }}
      />

      <Box maxW="720px" mx="auto">
        {!videoLoaded && (
          <AspectRatio ratio={3 / 4}>
            <Skeleton h="100%" w="100%" />
          </AspectRatio>
        )}
        <AspectRatio
          ratio={3 / 4}
          ref={wrapperEl}
          visibility={videoLoaded ? 'visible' : 'hidden'}
        >
          <>
            <video ref={videoEl} hidden></video>
            <canvas
              ref={canvasEl}
              style={{ borderRadius: '0px 0px 32px 32px' }}
            ></canvas>
          </>
        </AspectRatio>
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
      </Box>
    </>
  );
};
