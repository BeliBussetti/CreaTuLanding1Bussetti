import React from 'react';
import { Box, List, ListItem, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const ItemList = ({ products }) => {
  return (
    <Box>
      <List>
        {products.map((product) => (
          <ListItem key={product.id}>
            <Link as={RouterLink} to={`/product/${product.id}`}>
              {product.name}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ItemList;