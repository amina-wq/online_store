import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const ProductDetail = () => {
  const { uid } = useParams();
  const [basket, setBasket] = useState(null);

  useEffect(() => {
    const fetchBasketDetails = async () => {
      try {
        const response = await api.get(`/api/v1/baskets/${uid}`);
        setBasket(response.data);
      } catch (error) {
        console.error('Error fetching basket details:', error);
      }
    };

    fetchBasketDetails();
  }, [uid]);

  if (!basket) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{basket.title}</h2>
      <p>{basket.description}</p>
      {/* Display more details as needed */}
      <p>Category: {basket.category.name}</p>
      <p>Date-Time: {new Date(basket.date_time).toLocaleString()}</p>
    </div>
  );
};

export default ProductDetail;