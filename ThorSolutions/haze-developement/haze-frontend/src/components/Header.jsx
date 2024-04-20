import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { logoutUser } from "../features/userSlice";
import { auth } from "../firebase";
import { clearAccessToken } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const Header = ({ openNav }) => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const handelLogout = () => {
    localStorage.removeItem('customizerData');
    dispatch(logoutUser());
    dispatch(clearAccessToken());
    signOut(auth);
    localStorage.clear();
    window.history.replaceState({}, document.title, window.location.pathname);
  };
 
  return (
    <header className="Haze_header">
      <div className="logo">
        <img  className="menubaricon" onClick={openNav} src="assets/Image/menubar.svg"/>
        <a href="#"><img src="assets/Image/hazelogo.svg"/></a>
      </div>
      <nav className="nav_bar">
        <ul className="nav_menu">
          <li className="nav_list"> Help Center</li>
          <li className="nav_list" onClick={handelLogout}>Logout</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
