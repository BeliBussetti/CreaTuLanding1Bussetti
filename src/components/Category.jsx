import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Category = () => {
  const { categoryId } = useParams();
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
  }, [categoryId]);

  return (
    <div>
      <h1>Productos en Categoría {categoryId}</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
