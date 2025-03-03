import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../logo.svg";

export const Avatar = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>Choose your avatar below!</h2>
      <img src={logo} onClick={() => navigate("/")} />
      <button onClick={() => navigate("/")}>back</button>
    </>
  );
};
