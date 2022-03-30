import style from "./Timer.module.scss";
import Button from "../Button";
import Clock from "./Clock";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import { useEffect, useState } from "react";

interface Props {
  selected: ITask | undefined;
}

export default function Timer({ selected }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) setTime(timeToSeconds(selected.time));
  }, [selected]);

  return (
    <div className={style.timer}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button>Começar</Button>
    </div>
  );
}
