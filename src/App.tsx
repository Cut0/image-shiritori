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
        <Box minH="100vh" w="100%" py={16} bgColor="lightBackground">
          <Routes>
            {routeInfoList.map((routeInfo, index) => (
              <Route
                key={index}
                path={routeInfo.path}
                element={<routeInfo.page />}
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
