import React, { useState } from "react";
import logo from "./images/logo.png";
import "./Auth.css";
import { Eye, EyeSlash } from "iconsax-react";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [isShow, setShow] = useState(false);
  const [isHidden, setHidden] = useState(true);
  const [password, setPassword] = useState("password");
  const [value, setValue] = useState("");
  const myPassword = "Abc@123";
  const navigate = useNavigate();
  function handleAuth() {
    if (value === myPassword) {
      localStorage.setItem("UserAdmin", "logged in");
      navigate("/");
    } else {
      alert("Login Fail");
    }
  }
  if (localStorage.getItem("UserAdmin")) {
    navigate("/");
  }
  return (
    <div style={{ padding: "2rem" }}>
      <div className="container-logo">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <h1
        style={{
          fontWeight: "700",
          fontSize: "3rem",
          textAlign: "center",
          margin: "0",
          marginTop: "1.5rem",
        }}
      >
        Ronin Wallet
      </h1>
      <p style={{ textAlign: "center", fontSize: "1.2rem", marginTop: "1rem" }}>
        Your Digital Passport
      </p>
      <div>
        <span style={{ textTransform: "uppercase" }}>enter password</span>
        <div style={{ position: "relative" }}>
          <input
            className="password"
            type={password}
            maxLength={16}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button
            className="vision-password"
            hidden={isShow}
            onClick={() => {
              setHidden(false);
              setShow(true);
              setPassword("text");
            }}
          >
            <Eye size="32" color="#8F9BB3" />
          </button>
          <button
            className="vision-password"
            hidden={isHidden}
            onClick={() => {
              setShow(false);
              setHidden(true);
              setPassword("password");
            }}
          >
            <EyeSlash size="32" color="#8F9BB3" />
          </button>
        </div>
      </div>
      <div style={{ width: "8rem", margin: "auto" }}>
        <button type="submit" className="unlock" onClick={handleAuth}>
          Unlock
        </button>
      </div>
    </div>
  );
}

export default Auth;
