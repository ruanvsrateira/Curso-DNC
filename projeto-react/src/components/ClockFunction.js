import { useState, useEffect } from "react";

// Componente criada através do método mais utilizada, pela função
let interval;
let color = "red";
export const ClockFunction = () => {
  const [time, setTime] = useState(new Date().toString());

  // Chamado 1 vez quando o component é montado
  useEffect(() => {
    interval = setInterval(() => {
      setTime(new Date().toString());
    });

    // Aqui colocamos um return e a função quando o componente for desmontado
    return () => {
      clearInterval(interval);
    };
  });

  // função chamada toda vez que o estado time é alterado
  useEffect(() => {
    color = color == "red" ? "blue" : "red";
  }, [time]);

  return <h3 style={{ color }}>{time}</h3>;
};
