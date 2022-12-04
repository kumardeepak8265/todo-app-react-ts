import React, { ButtonHTMLAttributes, FC } from "react";

type buttonProps = {
  theme?: "primary" | "secondary" | "highlight" | "toogle";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<buttonProps> = ({ theme, onClick, children }) => {
  let className;

  if (theme == "primary") {
    className =
      " inline-flex justify-center px-4 py-2 text-sm font-medium text-white  border border-transparent rounded-md shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 bg-yellow-500  ";
  } else if (theme == "secondary") {
    className =
      "px-4 py-2  text-sm font-medium bg-white border border-gray-300 rounded-md shadow-sm text-blue-gray-900 hover:bg-blue-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 ml-3";
  } else if (theme == "highlight") {
    className =
      "inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-yellow-500 border border-transparent rounded-full shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500";
  } else if (theme == "toogle") {
    className = "rounded-full text-white bg-gray-600 ";
  }

  return (
    <div>
      <button className={" " + className} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
