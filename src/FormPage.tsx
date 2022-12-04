import React, { ChangeEvent } from "react";
import Button from "./Button";
import Input from "./Input";

type formpage = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  updateform: (a: boolean) => void;
};
function FormPage({ value, onChange, onClick, updateform }: formpage) {
  function handleUpdateForm() {
    updateform(false);
  }

  return (
    <div className=" border border-gray-200 sm:p-6 mt-4">
      <h3 className="text-lg text-gray-900 font-medium leading-6 my-2">
        Create a todo
      </h3>

      <Input
        id="new-todo"
        type="text"
        name="new-todo"
        placeholder="ADD A TODO"
        value={value}
        onChange={onChange}
      ></Input>

      <div className="flex">
        <Button theme="primary" onClick={onClick}>
          SAVE
        </Button>
        <Button type="button" theme="secondary" onClick={handleUpdateForm}>
          CANCEL
        </Button>
      </div>
    </div>
  );
}
export default FormPage;
