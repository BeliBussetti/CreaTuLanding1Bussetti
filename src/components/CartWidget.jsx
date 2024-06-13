// src/components/CartWidget.jsx
import React from 'react';
import { Box } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <Box display="flex" alignItems="center">
      <FaShoppingCart size="1.5em" />
      <Box as="span" marginLeft="0.5rem">0</Box>
    </Box>
  );
};

export default CartWidget;
