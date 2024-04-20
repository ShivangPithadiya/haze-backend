import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/userSlice";
import { setAccessToken } from "../features/authSlice";
import { completeShopifyAuth } from "../shopifyAuth";
import "./Login/Login.css";
import UserContext from "../contexts/UserContext";

const Login = ({ handleChange }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setPasswordType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://ec2-52-6-145-35.compute-1.amazonaws.com:5001/api/auth/login",
        {
          email,
          password,
        }
      );
      if (response.data.success) {
        localStorage.setItem("user", JSON.stringify(response.data.user))
        localStorage.setItem("token", response.data.token)
        dispatch(loginUser(response.data.user));
        navigate("/dashboard"); // Redirect to dashboard
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError("An error occurred. Please try again later");
    }


  };

  const set_PasswordType = () => {
    setPasswordType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };

  return (
    <div className="login">
      <div className="login_div">Login</div>
      <div>
        <label className="label_div">Email</label>
        <div className="input-div">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        <label className="label_div">Password</label>
        <div className="input-div border d-flex justify-content-between">
          <input
            onChange={(e) => setPassword(e.target.value)}
            type={passwordType}
            placeholder="Password"
          />
          <button
            className="password-btn"
            onClick={set_PasswordType}
          >
            {passwordType === "password" ? (
              <i class="bi bi-eye" />
            ) : (
              <i class="bi bi-eye-slash" />
            )}
          </button>
        </div>
      </div>
      <div className="forgot_pass">Forgot your password?</div>
      <button className="login-btn" onClick={handleLogin}>
        Log in
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="account_create">
        Not a member?{" "}
        <span onClick={() => handleChange("signup")}>Create account.</span>
      </div>
    </div>
  );
};

export default Login;
