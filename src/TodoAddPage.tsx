import React, { ChangeEvent, useEffect, useState } from "react";
import Button from "./Button";
import FormPage from "./FormPage";
import TodoRow from "./TodoRow";

type todoArraytype = string[];

function TodoAddPage() {
  const todoStoreValue = JSON.parse(localStorage.getItem("todo")) || [];
  const doneTodoStoreValue = JSON.parse(localStorage.getItem("donetodo")) || [];
  const [tododata, settododata] = useState("");
  const [todorowdata, settodorowdata] = useState<todoArraytype>(todoStoreValue);
  const [donelist, setdonelist] = useState<todoArraytype>(doneTodoStoreValue);
  const [form, setform] = useState(false);
  // const [theme, setTheme] = useState("light");
  localStorage.setItem("todo", JSON.stringify(todorowdata));
  localStorage.setItem("donetodo", JSON.stringify(donelist));

  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [theme]);
  // function darkModeEnable() {
  //   setTheme(theme === "dark" ? "light" : "dark");

  // }
  function buttonclick() {
    setform(true);
  }

  function handleTodoChange(event: ChangeEvent<HTMLInputElement>) {
    const inputvalue = event.target.value;
    if (inputvalue == " ") {
      return;
    }
    settododata(inputvalue);
  }

  function AddTodo() {
    if (!tododata) {
      return alert("please enter a todo Message");
    }

    todorowdata.map((todo) => {
      if (todo == tododata) {
        return alert("please no fill same todo");
      }
    });
    const data = [...todorowdata, tododata];
    settodorowdata(data);

    setform(false);
    settododata("");
  }

  function markAsdone(todo: string) {
    console.log("markdone:", todo);
    const newtodo = todorowdata.filter((t) => t !== todo);
    setdonelist([...donelist, todo]);
    settodorowdata(newtodo);
  }

  function markAsnotdone(todo: string) {
    console.log("marknotdonetodo:", todo);
    const oldtodo = donelist.filter((t) => t !== todo);
    setdonelist(oldtodo);
    settodorowdata([...todorowdata, todo]);
  }

  function DeleteTodo(id: string) {
    const oldTodoRow = [...todorowdata];
    const oldDonelist = [...donelist];
    const newTodoRow = oldTodoRow.filter((t) => t !== id);
    const newDonelist = oldDonelist.filter((t) => t !== id);
    settodorowdata(newTodoRow);
    setdonelist(newDonelist);
  }

  function refReashTodo() {
    settodorowdata([]);
    setdonelist([]);
  }

  return (
    <div className=" h-screen px-4 sm:px-6 lg:px-8 space-y-6  dark:bg-gray-600">
      {/* <Button onClick={darkModeEnable} theme="secondary">
        d
      </Button> */}
      <div className=" md:items-center md:justify-between md:flex my-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900  dark:text-white">
            Things to get done
          </h1>
        </div>
        <div className="mt-6 md:mt-0">
          <Button theme="primary" onClick={refReashTodo}>
            Refresh
          </Button>
        </div>
      </div>

      <h1 className="text-lg font-medium leading-6 text-gray-900 mb-4  dark:text-white">
        Things todo
      </h1>
      <div>
        {todorowdata.map(function (todo, index) {
          return (
            <TodoRow
              todo={todo}
              onChange={markAsdone}
              check={false}
              key={index}
              DTodo={DeleteTodo}
            ></TodoRow>
          );
        })}

        <Button theme="highlight" onClick={buttonclick}>
          +Add a todo
        </Button>
        {form && (
          <FormPage
            value={tododata}
            onChange={handleTodoChange}
            onClick={AddTodo}
            updateform={setform}
          ></FormPage>
        )}

        <h1 className="text-lg font-medium leading-6 text-gray-900 mt-4  dark:text-white">
          Things done
        </h1>
        {donelist.map(function (todo, index) {
          return (
            <TodoRow
              todo={todo}
              DTodo={DeleteTodo}
              onChange={markAsnotdone}
              check={true}
              key={index}
            ></TodoRow>
          );
        })}
      </div>
      <div></div>
    </div>
  );
}

export default TodoAddPage;
