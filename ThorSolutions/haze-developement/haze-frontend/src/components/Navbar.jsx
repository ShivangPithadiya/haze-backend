import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { ImLink } from "react-icons/im";
import { ToastContainer, toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import svg1 from "../assets/Image/menubar.svg";
import svg2 from "../assets/Image/hazelogo.svg";
const Navbar = () => {
  const location = useLocation(); // Get the location object
  const query = new URLSearchParams(location.search);
  const [copied, setCopied] = useState(false);
  const notify = () => {
    toast.success("Link copied sucessfully");
    const url = window.location.href;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <nav className="navbar bg-body-light d-flex justify-content-between">
      <div className="ps-5">
        <img
          className="menubaricon"
          src={svg1}
        />
        <a href="/dashboard">
          <img src={svg2} />
        </a>
      </div>
      <div className="s">
        <div className="select-wrapper">
          <select className="select1 select w-[175px]" style={{width:"179px "}}>
            <option value="value1">Untitled</option>
            <option value="value1">Untitled1</option>
          </select>
        </div>
      </div>
      <div className="pe-5">
        <button type="button" class="btn b1 btn-outline-dark " onClick={notify}>
          {/* link React Icon */}
          <ImLink className="mx-1" />
          Copy LinK
        </button>
        <ToastContainer position="top-right" />
      </div>
    </nav>
  );
};

export default Navbar;
