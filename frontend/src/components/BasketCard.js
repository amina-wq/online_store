import React from "react";
import "../App.css";

export const BasketCard = ({basket}) => {
  return (
    <div className="basket-card" onClick={
        () => {
            window.location.href = `/baskets/${basket.id}`;
        }
    }>
      <div className="basket-image-base">
        <img className="basket-image" alt="Basket image" src={basket.image} />
      </div>
      <div className="basket-info">
        <div className="overlap-group">
          <div className="basket-title">{basket.title}</div>
          <div className="basket-price">{`${basket.price}$`}</div>
          <div className="cart-button">
            <img className="cart-icon" alt="Cart icon" src="../img/carticon.png" />
          </div>
        </div>
      </div>
    </div>
  );
};