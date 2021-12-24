import { Dispatch, SetStateAction, useState } from "react";

type Props = {
};
const Timer = (props: Props) => {
  const [milliseconds, setMilliseconds] = useState(0);
  const [intervalRef, setIntervalRef] = useState<undefined | NodeJS.Timer>(undefined);
  const startTimer = () => {
    if (!intervalRef) {
      setIntervalRef(setInterval(() => {
        setMilliseconds(milliseconds + 100);
      }, 100));
    }
  };
  const stopTimer = () => {
    if (intervalRef) {
      clearInterval(intervalRef);
      setIntervalRef(undefined);
    }
  };
  const restartTimer = () => {
    setMilliseconds(0);
  };
  return (
    <div>
      <div className="flex center">
        <p>{milliseconds}</p>
        <button onClick={startTimer} className="mx-3">
          Start
        </button>
        <button onClick={stopTimer} className="mx-3">
          Stop
        </button>
        <button onClick={restartTimer} className="mx-3">
          Restart
        </button>
      </div>
    </div>
  );
};

export default Timer;
