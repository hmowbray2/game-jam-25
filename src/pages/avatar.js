import React from "react";
import { useNavigate } from "react-router-dom";
import bear from "../assets/bear.png";
import bee from "../assets/bee.png";
import mushroom from "../assets/mushroom.png";
import sheep from "../assets/sheep.png";
import strawberry from "../assets/strawberry.png";

export const Avatar = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>Choose your avatar below!</h2>
      <img src={bear} onClick={() => navigate("/avatarA")} />
      <img src={bee} onClick={() => navigate("/avatarB")} />
      <img src={mushroom} onClick={() => navigate("/avatarC")} />
      <img src={sheep} onClick={() => navigate("/avatarD")} />
      <img src={strawberry} onClick={() => navigate("/avatarE")} />
      <button onClick={() => navigate("/")}>back</button>
    </>
  );
};
