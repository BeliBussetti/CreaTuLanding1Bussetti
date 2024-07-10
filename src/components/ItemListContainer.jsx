import React, { useState, useEffect } from 'react';
import { Box, SimpleGrid, Image, Text } from '@chakra-ui/react';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        { id: 1, name: 'Remera DBZ', price: 8000, category: 'Remeras', description: 'Remera de algodón', image: '/images/remera.jpg' },
        { id: 2, name: 'Buzo DBZ', price: 12000, category: 'Buzos', description: 'Buzo de lana', image: '/images/buzo.jpeg' },
      ];
      setProducts(fetchedProducts);
    }, 1000);
  }, []);

  const Item = ({ name, price, image }) => (
    <Box textAlign="center" marginBottom="2rem">
      <Image src={image} alt={name} margin="0 auto" />
      <Text fontSize="xl" fontWeight="bold">{name}</Text>
      <Text>Precio: ${price}</Text>
    </Box>
  );

  return (
    <Box padding="2rem" textAlign="center">
      <h2>{greeting}</h2>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing="2rem">
        {products.map((product) => (
          <Item key={product.id} name={product.name} price={product.price} image={product.image} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ItemListContainer;
