import React, { FC } from "react";
import { MdDeleteForever } from "react-icons/md";
type todoRow = {
  todo: string;
  onChange: (todo: string) => void;
  check: boolean;
  DTodo: (id: string) => void;
};

const TodoRow: FC<todoRow> = ({ todo, onChange, check, DTodo }) => {
  function onclick() {
    onChange(todo);
  }
  function DeleteTodo() {
    DTodo(todo);
  }
  return (
    <div className=" px-4 space-x-4  flex items-center my-4">
      <input
        name="todo"
        type="checkbox"
        className="h-4 w-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
        checked={check}
        onChange={onclick}
      ></input>
      <h1 className=" text-2xl">{todo}</h1>
      <button onClick={DeleteTodo}>
        <MdDeleteForever className="text-2xl" />
      </button>
    </div>
  );
};

export default TodoRow;
