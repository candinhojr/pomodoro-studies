import React, { useState } from "react";
import { ITask } from "../types/task";
import Form from "../components/Form";
import List from "../components/List";
import Timer from "../components/Timer";
import style from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function handleSelected(taskSelected: ITask) {
    setSelected(taskSelected);
    setTasks((previousTasks) =>
      previousTasks.map((task) => ({
        ...task,
        selected: task.id === taskSelected.id ? true : false,
      }))
    );
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} handleSelected={handleSelected} />
      <Timer />
    </div>
  );
}

export default App;
