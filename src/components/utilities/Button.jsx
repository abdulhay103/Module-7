import React from "react";

const Button = ({ btnTxt, handler }) => {
  return (
    <>
      <button
        onClick={() => {
          handler();
        }}
        className="px-3 py-2 bg-lime-500 rounded text-white font-bold"
      >
        {btnTxt}
      </button>
    </>
  );
};

export default Button;
