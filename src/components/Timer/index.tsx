import style from "./Timer.module.scss";
import Button from "../Button";
import Clock from "./Clock";

export default function Timer() {
  return (
    <div className={style.timer}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.clockWrapper}>
        <Clock />
      </div>
      <Button>Começar</Button>
    </div>
  );
}
