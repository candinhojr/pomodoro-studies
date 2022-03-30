import { ITask } from "../../types/task";
import Item from "./Item";
import style from "./List.module.scss";

interface Props {
  tasks: ITask[];
  handleSelected: (taskSelected: ITask) => void;
}

function List({ tasks, handleSelected }: Props) {
  return (
    <aside className={style.todoList}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item) => (
          <Item handleSelected={handleSelected} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
