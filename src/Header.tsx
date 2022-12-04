import React from "react";
import Button from "./Button";

function Header() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 md:items-center md:justify-between md:flex mt-4">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Things to get done</h1>
      </div>
      <div className="mt-6 md:mt-0">
        <Button theme="primary">Refresh</Button>
      </div>
    </div>
  );
}

export default Header;
