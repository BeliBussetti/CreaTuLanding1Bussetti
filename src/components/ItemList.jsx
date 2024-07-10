import React from 'react';
import { Box, List, ListItem, Image, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const ItemList = ({ products }) => {
  return (
    <Box>
      <List>
        {products.map((product) => (
          <ListItem key={product.id}>
            <Image src={product.image} alt={product.name} width="100px" />
            <Link as={RouterLink} to={`/product/${product.id}`}>
              {product.name}
            </Link>
            <p>Precio: ${product.price}</p>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ItemList;
