import React from "react";
import { useNavigate } from "react-router-dom";

export const AvatarA = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2>success</h2>
      <button onClick={() => navigate("/avatar")}>back</button>
    </>
  );
};
