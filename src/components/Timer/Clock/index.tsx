import style from "./Clock.module.scss";

interface Props {
  time: number | undefined;
}

export default function Clock({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteDicker, minuteUnity] = String(minutes).padStart(2, "0");
  const [secondDicker, secondUnity] = String(seconds).padStart(2, "0");

  return (
    <>
      <span className={style.clockNumber}>{minuteDicker}</span>
      <span className={style.clockNumber}>{minuteUnity}</span>
      <span className={style.clockDivider}>:</span>
      <span className={style.clockNumber}>{secondDicker}</span>
      <span className={style.clockNumber}>{secondUnity}</span>
    </>
  );
}
