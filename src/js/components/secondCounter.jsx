import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importar FontAwesomeIcon
import { faClock } from "@fortawesome/free-solid-svg-icons";

const SecondCounter = ({ seconds, onAlert }) => {
  const [time, setTime] = useState(seconds);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  useEffect(() => {
    if (onAlert && time === onAlert) {
      alert(`¡Alerta! Se alcanzó el tiempo especificado: ${onAlert} segundos.`);
    }
  }, [time, onAlert]);

  const handleReset = () => {
    setTime(0);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleResume = () => {
    setIsRunning(true);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>
        <FontAwesomeIcon icon={faClock} /> {time} segundos
      </h1>
      <button type="button" class="btn btn-primary m-1" onClick={handleReset}>
        Reiniciar
      </button>
      <button type="button" class="btn btn-danger m-1" onClick={handleStop}>
        Detener
      </button>
      <button type="button" class="btn btn-primary m-1" onClick={handleResume}>
        Reanudar
      </button>
    </div>
  );
};

export default SecondCounter;
