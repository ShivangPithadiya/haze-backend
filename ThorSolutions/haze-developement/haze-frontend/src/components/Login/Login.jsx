import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState,useEffect } from "react";
import {auth} from "../../firebase"
import { useNavigate } from "react-router-dom";
import { redirectToShopify,completeShopifyAuth } from "../../shopifyAuth";
import { useDispatch } from "react-redux";
import { loginUser,setLoading } from "../../features/userSlice";
import { setAccessToken } from "../../features/authSlice";
import "./Login.css"
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("");
  const [shopifyData, setShopifyData] = useState(null);
  const [passwordtype, setPasswordType] = useState("password");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try{
      await signInWithEmailAndPassword(auth, email, password);
      console.log("login",auth, email, password)
      navigate("/dashboard");
    }catch(error){
      if (error.code === 'auth/invalid-login-credentials') {
        setError('Invalid login credentials. Please try again.');
      } else {
        setError('An error occurred. Please try again later.');
      }
    }    
  };

  useEffect(() => {
    completeShopifyAuth(setShopifyData);
  }, []); 

  useEffect(() => {
    if(shopifyData){
      dispatch(setAccessToken(shopifyData));
      dispatch(loginUser(shopifyData));
      navigate("/dashboard");
    }
    
    
  }, [shopifyData]);

  function set_PasswordType(passwordtype) {
    if (passwordtype == "password") {
      setPasswordType("text")
    } else {
      setPasswordType("password")
    }
  }

  return (
    <div className=" login">
      
      <img
        src="assets/shopify.png"
        alt=""
      />
       <div className="input-div border">
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
      />
      </div>
      <div className="input-div border d-flex justify-content-between">
      <input
        onChange={(e) => setPassword(e.target.value)}
        type={passwordtype}
        placeholder="Password"
      />
     <button className="password-btn" onClick={() => set_PasswordType(passwordtype)}>
                      {passwordtype === "password" ? "Show" : "Hide"}
                    </button>
      </div>
      
      <button className="login-btn" onClick={handleLogin}>Log in</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p></p>
      <button onClick={redirectToShopify}>Authenticate with Shopify</button>
    </div>
  );
};

export default Login;
