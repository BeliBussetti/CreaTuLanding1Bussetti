import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    // Simular llamada asíncrona a datos
    setTimeout(() => {
      const fetchedProduct = { id: productId, name: 'Producto ' + productId, description: 'Descripción del producto' };
      setProduct(fetchedProduct);
    }, 1000);
  }, [productId]);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div>
      {product ? (
        <>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <button onClick={handleAddToCart}>Agregar al Carrito</button>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ProductDetail;
