import { ChakraProvider } from '@chakra-ui/react';

const App = () => {
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <p>伝説の始まり</p>
        </header>
      </div>
    </ChakraProvider>
  );
};

export default App;
