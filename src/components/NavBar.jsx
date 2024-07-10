import React from 'react';
import { Box, Flex, Link as ChakraLink, Spacer, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Flex as="nav" padding="1.5rem" background="blue.500" color="white">
      <Heading size="md">Mi Tienda</Heading>
      <Spacer />
      <ChakraLink as={Link} to="/" margin="0 1rem">Home</ChakraLink>
      <ChakraLink as={Link} to="/category/1" margin="0 1rem">Categoría 1</ChakraLink>
      <ChakraLink as={Link} to="/category/2" margin="0 1rem">Categoría 2</ChakraLink>
      <ChakraLink as={Link} to="/cart" margin="0 1rem">Carrito</ChakraLink>
      <CartWidget />
    </Flex>
  );
};

export default NavBar;