import React from "react";
import Button from "./Button";
import { BsFillMoonFill } from "react-icons/bs";
function NavBar({ darkMode }) {
  return (
    <div className="max-w-7xl  mx-auto px-4 sm:px-6 items-center lg:px-8 border-2 border-b-gray-44 flex justify-between  ">
      <div className="flex items-center h-16">
        <p className="text-xl font-medium text-gray-800">XTodo</p>
      </div>
      <Button onClick={darkMode} theme="toogle">
        <BsFillMoonFill />
      </Button>
    </div>
  );
}

export default NavBar;
