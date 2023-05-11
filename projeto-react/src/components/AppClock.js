import { useState } from "react";
import { Clock } from "./Clock";
import { ClockFunction } from "./ClockFunction";

export const AppClock = () => {
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow(!show);
  }

  return (
    <>
      {show && <ClockFunction />}
      <button onClick={toggleShow}>{show ? "esconder" : "mostrar"}</button>
    </>
  );
};
