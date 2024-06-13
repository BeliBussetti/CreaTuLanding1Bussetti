// src/App.jsx
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <NavBar />
        <ItemListContainer greeting="Bienvenidos a mi tienda" />
      </div>
    </ChakraProvider>
  );
}

export default App;
