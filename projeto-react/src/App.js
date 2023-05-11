import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import { Task } from "./components/Task";
import { AppCounter } from "./components/AppCounter";
import { AppCounterClass } from "./components/AppCounterClass";

function App() {
  const tasks = ["Ir lavar o carro", "fazer compras", "Buscar cão no petshop"];

  return (
    <Fragment>
      <h1>Task</h1>
      {tasks.map((task) => (
        <p>
          <Task text={task} />
        </p>
      ))}

      <h1>Counter Functional</h1>
      <AppCounter />

      <h1>Counter Class</h1>
      <AppCounterClass />
    </Fragment>
  );
}

export default App;

