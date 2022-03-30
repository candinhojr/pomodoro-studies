import React, { useState } from "react";
import { ITask } from "../types/task";
import Form from "../components/Form";
import List from "../components/List";
import Timer from "../components/Timer";
import style from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <Timer />
    </div>
  );
}

export default App;
