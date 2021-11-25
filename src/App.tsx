import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header, Footer } from './components/common';
import { theme } from './theme';
import { RouteInfoList } from './utils/routes';

const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Header />
        <Box h="100vh" w="100%" py={16} bgColor="whiteBackground">
          <Routes>
            {RouteInfoList.map((routeInfo, index) => (
              <Route
                key={index}
                path={routeInfo.path}
                element={<p>{routeInfo.name}</p>}
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
