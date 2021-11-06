import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <h1>Hello React Router</h1>
        <Routes>
          <Route path="/" element={<p>home</p>} />
          <Route path="/ranking" element={<p>ranking</p>} />
          <Route path="/profile" element={<p>profile</p>} />
          <Route path="/config" element={<p>config</p>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
