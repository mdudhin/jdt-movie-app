import React from "react";
import { useNavigate } from "react-router";

const DetailScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex justify-center items-center">
      <button
        className="bg-black text-white cursor-pointer p-10 rounded-2xl"
        onClick={() => navigate("/")}
      >
        BACK!
      </button>
    </div>
  );
};

export default DetailScreen;
