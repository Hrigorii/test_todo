import { Inputs } from "./components/Inputs";
import { Lists } from "./components/Lists";
import { useState } from "react";


export function App() {

  const [todos, setTodos] = useState([]);

  return (
    <div className="wrapper">
      <Inputs setTodos={setTodos} />
      <Lists todos={todos} setTodos={setTodos} />
    </div>
  );
}


