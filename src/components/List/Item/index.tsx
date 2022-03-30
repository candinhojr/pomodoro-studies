import { ITask } from "../../../types/task";
import style from "./Item.module.scss";

interface Props extends ITask {
  handleSelected: (taskSelected: ITask) => void;
}

export default function Item({
  task,
  time,
  selected,
  completed,
  id,
  handleSelected,
}: Props) {
  return (
    <li
      className={`${style.item} ${selected && style.itemSelected} ${
        completed && style.itemCompleted
      }`}
      onClick={() => !completed && handleSelected({ task, time, selected, completed, id })}
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {completed && <span className={style.done} aria-label="task done"></span>}
    </li>
  );
}
