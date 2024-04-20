import React, { useState } from "react";
import axios from "axios";
import "./Login/Login.css";

const Signup = ({ handleChange }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [userType, setUserType] = useState('admin');

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      if (!email || !password || !name || !confirmPassword) {
        throw new Error("Please provide all fields.");
      }

      if (password !== confirmPassword) {
        throw new Error("Passwords do not match.");
      }

      const response = await axios.post(
        "http://ec2-52-6-145-35.compute-1.amazonaws.com:5001/api/auth/register",
        {
          name,
          email,
          userType,
          password,
          confirmPassword,
        }
      );

      console.log("Signup successful", response.data);
      handleChange("login");
    } catch (error) {
      console.error("Signup error", error.message);
    }
  };

  return (
    <div className="signup">
      <div className="login_div">Sign Up</div>
      <div>
        <label className="label_div">Name*</label>
        <div className="input-div">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name*"
            value={name}
          />
        </div>
      </div>
      <div>
        <label className="label_div">Email*</label>
        <div className="input-div">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email*"
            value={email}
          />
        </div>
      </div>
      <div className="usertype">
        <label className="label_div">User Type</label>
        <div className="input-div border d-flex justify-content-between">
          {" "}
          <select
            id="userType"
            value={userType}
            onChange={handleUserTypeChange}
          >
            <option value="retail-user">Retail User</option>
            <option value="admin">Admin</option>
            <option value="super-admin">Super Admin</option>
          </select>
        </div>
      </div>
      <div>
        <label className="label_div">Password*</label>
        <div className="input-div border d-flex justify-content-between">
          {" "}
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password*"
            value={password}
          />
        </div>
      </div>

      <div>
        <label className="label_div">Confirm Password*</label>
        <div className="input-div border d-flex justify-content-between">
          {" "}
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm Password*"
            value={confirmPassword}
          />
        </div>
      </div>
      <div className="d-flex">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          style={{ marginRight: "8px" }}
        />
        <span className="already_member">
          {" "}
          I agree to all statements in <span>Terms of Service</span>
        </span>
      </div>
      <button className="mt-3" onClick={handleSignUp}>
        Sign up
      </button>
      <div
        className="already_member mt-3"
        onClick={() => handleChange("login")}
      >
        {" "}
        <span>I’m already a member</span>
      </div>
    </div>
  );
};

export default Signup;
