import { InputHTMLAttributes, FC } from "react";

type inputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: FC<inputProps> = ({ ...rest }) => {
  return (
    <div className="my-4">
      <input
        className="block w-60 p-2 border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm py-4"
        {...rest}
      ></input>
    </div>
  );
};
export default Input;
