import React, { useState, useEffect } from "react";
import "../App.css";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    setIsLoggedIn(accessToken !== null);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  return (
    <div className="header">
      <div className="navbar">
        <img
          className="logo"
          alt="Logo"
          src="https://i.pinimg.com/564x/35/d7/ae/35d7aeb20d290be8f49a56cc9a91fb95.jpg"
        />

        <div className="text-wrapper" onClick={() => {window.location.href = "/";}}>Home</div>
        <div className="text-wrapper">New Collection</div>
        <div className="text-wrapper">Sales Promo</div>
        <div className="text-wrapper">FAQ</div>

        {isLoggedIn ? (
          <div className="log-in-button" onClick={handleLogout}>
            <div className="text-wrapper">Log Out</div>
          </div>
        ) : (
          <div className="log-in-button" onClick={() => {window.location.href = "/login";}}>
            <div className="text-wrapper">Sign Up / Sign In</div>
          </div>
        )}
      </div>
    </div>
  );
};
