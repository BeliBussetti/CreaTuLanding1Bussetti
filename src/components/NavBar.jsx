import React from 'react';
import { Box, Flex, Text, Link } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box bg="blue.500" padding="1rem">
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="xl" color="white" fontWeight="bold">Mi Tienda</Text>
        <Flex>
          <Link href="/" color="white" marginRight="1rem">Home</Link>
          <Link href="/categoria1" color="white" marginRight="1rem">Categoría 1: Remeras</Link>
          <Link href="/categoria2" color="white" marginRight="1rem">Categoría 2: Buzos</Link>
          <Link href="/carrito" color="white">Carrito</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
