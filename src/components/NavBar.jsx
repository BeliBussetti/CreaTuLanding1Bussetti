// src/components/NavBar.jsx
import React from 'react';
import { Box, Flex, Link, Spacer, Heading } from '@chakra-ui/react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Flex as="nav" padding="1.5rem" background="blue.500" color="white">
      <Heading size="md">Mi Tienda</Heading>
      <Spacer />
      <Link href="#home" margin="0 1rem">Home</Link>
      <Link href="#products" margin="0 1rem">Products</Link>
      <Link href="#contact" margin="0 1rem">Contact</Link>
      <CartWidget />
    </Flex>
  );
};

export default NavBar;
