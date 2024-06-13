import React from 'react';
import { Box } from '@chakra-ui/react';

const ItemListContainer = ({ greeting }) => {
  return (
    <Box padding="2rem" textAlign="center">
      <h2>{greeting}</h2>
      <p>Aquí va el catálogo de productos</p>
    </Box>
  );
};

export default ItemListContainer;
