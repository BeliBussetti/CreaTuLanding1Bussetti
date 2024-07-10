import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simular llamada asíncrona a datos
    setTimeout(() => {
      const fetchedProducts = [
        { id: 1, name: 'Producto 1' },
        { id: 2, name: 'Producto 2' },
      ];
      setProducts(fetchedProducts);
    }, 1000);
  }, []);

  return (
    <Box padding="2rem" textAlign="center">
      <h2>{greeting}</h2>
      <ItemList products={products} />
    </Box>
  );
};

export default ItemListContainer;