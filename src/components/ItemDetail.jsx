import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

const ItemDetail = ({ product, onAddToCart }) => {
  return (
    <Box>
      <Heading>{product.name}</Heading>
      <Text>{product.description}</Text>
      <Button onClick={onAddToCart}>Agregar al Carrito</Button>
    </Box>
  );
};

export default ItemDetail;