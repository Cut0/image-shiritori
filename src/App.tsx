import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header, Footer } from './components/common';
import { theme } from './theme';
import { routeInfoList } from './utils/routes';

const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Header />
        <Box bgColor="lightBackground" minH="100vh" py={16} w="100%">
          <Routes>
            {routeInfoList.map((routeInfo, index) => (
              <Route
                element={<routeInfo.page />}
                key={index}
                path={routeInfo.path}
              />
            ))}
          </Routes>
        </Box>
        <Footer />
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;
