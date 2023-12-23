import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const BasketDetail = () => {
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
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="basket-detail">
      <h2>{basket.title}</h2>
      <p>{basket.description}</p>
      <p>
        <strong>Category:</strong> {basket.category.name}
      </p>
      <p>
        <strong>Date-Time:</strong> {new Date(basket.date_time).toLocaleString()}
      </p>
    </div>
  );
};

export default BasketDetail;
