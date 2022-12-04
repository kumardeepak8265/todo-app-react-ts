import { useEffect, useState } from "react";
import TodoAddPage from "./TodoAddPage";
import NavBar from "./NavBar";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  function darkModeEnable() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <div className="dark:bg-gray-800">
      <NavBar darkMode={darkModeEnable}></NavBar>
      <TodoAddPage></TodoAddPage>
    </div>
  );
}
export default App;
