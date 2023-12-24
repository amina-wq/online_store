import React, { useState } from "react";
import api from "../services/api";
import AuthorizationSignUp from "../components/SignUpForm";
import "../App.css";

const AuthorizationLogin = () => {
  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });

  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleLoginChange = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isSignUpMode) {
        // Handle switching to SignUp mode (if needed)
      } else {
        console.log(loginFormData)
        const response = await api.post("/api/token/", loginFormData);
        const accessToken = response.data.access_token;
        const refreshToken = response.data.refresh_token;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Authentication failed:", error.response.data);
    }
  };

  const toggleMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  return (
    <div className="authorization-login">
      <div className="form">
        <div className="form-switch">
          <button type="button" onClick={toggleMode}>
            {isSignUpMode ? "Switch to Log In" : "Switch to Sign Up"}
          </button>
        </div>
        {isSignUpMode ? (
          <AuthorizationSignUp />
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="enter-email-box">
              <div className="text-wrapper">Email address</div>
              <input
                type="text"
                name="username"
                onChange={handleLoginChange}
                value={loginFormData.username}
              />
            </div>
            <div className="enter-password-box">
              <div className="text-wrapper">Password</div>
              <input
                type="password"
                name="password"
                onChange={handleLoginChange}
                value={loginFormData.password}
              />
            </div>
            <button type="submit" className="submit-button">
              <div className="text-wrapper">Login</div>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthorizationLogin;
