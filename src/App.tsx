import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useReducer } from 'react';
import { theme } from './plugins/theme';
import { Header, Footer } from './components/common';
import './plugins/firebase';
import { routeInfoList } from './features/routes/utils';
import { AuthContext, initialState, reducer } from './features/auth/store';
import { AppContainer } from './components/common/AppContainer';
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <AuthContext.Provider value={[state, dispatch]}>
          <AppContainer>
            <>
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
            </>
          </AppContainer>
        </AuthContext.Provider>
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;
