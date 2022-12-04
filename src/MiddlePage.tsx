import React from "react";
import TodoAddPage from "./TodoAddPage";

function MiddlePage() {
  return (
    <div className="px-6 py-8 space-y-4">
      <h1 className="text-lg font-medium leading-6 text-gray-900">
        Things to do
      </h1>
      <TodoAddPage></TodoAddPage>
    </div>
  );
}

export default MiddlePage;
