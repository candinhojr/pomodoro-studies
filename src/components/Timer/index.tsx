import style from "./Timer.module.scss";
import Button from "../Button";
import Clock from "./Clock";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import { useEffect, useState } from "react";

interface Props {
  selected: ITask | undefined;
  completeTask: () => void
}

export default function Timer({ selected, completeTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) setTime(timeToSeconds(selected.time));
  }, [selected]);

  function regressive(timer: number = 0) {
    setTimeout(() => {
      if (timer > 0) {
        setTime(timer - 1)
        return regressive(timer - 1)
      }
      completeTask();
    }, 1000);
  }

  return (
    <div className={style.timer}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => regressive(time)}>Começar</Button>
    </div>
  );
}
