import React from "react";
import { useNavigate } from "react-router-dom";

export const Quiz = () => {
  const navigate = useNavigate();
  return (
    <>
      <p>Take our quiz!</p>
      <button onClick={() => navigate("/")}>back</button>
    </>
  );
};
