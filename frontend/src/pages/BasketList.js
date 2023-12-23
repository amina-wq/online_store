import React, { useEffect, useState } from 'react';
import api from '../services/api';
import {BasketCard} from '../components/BasketCard';
import "../App.css";

export const BasketList = () => {
  const [baskets, setBaskets] = useState([]);

  useEffect(() => {
    const fetchBaskets = async () => {
      try {
        const response = await api.get('/api/v1/baskets');
        setBaskets(response.data);
      } catch (error) {
        console.error('Error fetching baskets:', error);
      }
    };

    fetchBaskets();
  }, []);

  const chunkSize = 3; // Number of cards in a single row

  const chunkedBaskets = baskets.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new row
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  return (
      <div className="basket-list">
          {chunkedBaskets.map((row, rowIndex) => (
              <div key={rowIndex} className="basket-row">
                {row.map((basket, cardIndex) => (
                    <BasketCard key={basket.id} basket={basket} />
                ))}
              </div>
          ))}
      </div>
  );
};