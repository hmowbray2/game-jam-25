import React from "react";
import { useCharacter } from "../../hooks/useCharacter";
import { Counter } from "./Counter";
import { useNavigate } from "react-router-dom";

export const Heading = ({ text, title }) => {
  const { selectedAvatar } = useCharacter();

  const navigate = useNavigate();

  return (
    <div className="relative flex items-center w-full bg-dark-green h-[8rem]">
      <img
        className="absolute left-5 top-1/2 transform -translate-y-1/2 w-[80px] h-[80px]"
        src={selectedAvatar}
        alt="Avatar"
        onClick={() => navigate('/')}
      />
      <div className="w-full flex flex-col items-center justify-center pt-6">
        <h1 className="text-white font-semibold text-5xl">{text}</h1>
        <h2 className="text-white text-2xl mt-3">{title}</h2>
      </div>
        <div className="absolute right-5 top-1/2 transform -translate-y-1/2">
          <Counter />
        </div>
      </div>
  );
};
