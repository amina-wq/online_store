import React from "react";
import "../App.css";

export const BasketCard = ({basket}) => {
  return (
    <div className="basket-card">
      <div className="basket-image-base">
        <img className="basket-image" alt="Basket image" src="https://target.scene7.com/is/image/Target/GUEST_3f1b466a-8105-4cf6-bd46-5437ca5bbe23" />
      </div>
      <div className="basket-info">
        <div className="overlap-group">
          <div className="basket-title">{basket.title}</div>
          <div className="basket-price">{basket.price}</div>
          <div className="cart-button">
            <img className="cart-icon" alt="Cart icon" src="../img/carticon.png" />
          </div>
        </div>
      </div>
    </div>
  );
};