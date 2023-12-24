import React, {useState} from "react";
import api from "../services/api";
import "../App.css";

const AuthorizationSignUp = () => {
    const [signUpFormData, setSignUpFormData] = useState({
        username: "",
        password: "",
        email: "",
    });

    const handleSignUpChange = (e) => {
        setSignUpFormData({...signUpFormData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/api/v1/auth/sign_up/", signUpFormData);
            const accessToken = response.data.access_token;
            const refreshToken = response.data.refresh_token;
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);
            window.location.href = "/";
            console.log("Registration successful:", response.data);
        } catch (error) {
            console.error("Registration failed:", error.response.data);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="enter-email-box">
                <div className="text-wrapper">Email address</div>
                <input
                    type="text"
                    name="email"
                    onChange={handleSignUpChange}
                    value={signUpFormData.email}
                />
            </div>
            <div className="enter-username-box">
                <div className="text-wrapper">Username</div>
                <input
                    type="text"
                    name="username"
                    onChange={handleSignUpChange}
                    value={signUpFormData.username}
                />
            </div>
            <div className="enter-password-box">
                <div className="text-wrapper">Password</div>
                <input
                    type="password"
                    name="password"
                    onChange={handleSignUpChange}
                    value={signUpFormData.password}
                />
            </div>
            <button type="submit" className="submit-button">
                <div className="text-wrapper">Sign Up</div>
            </button>
        </form>
    );
};

export default AuthorizationSignUp;
