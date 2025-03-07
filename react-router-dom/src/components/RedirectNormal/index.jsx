import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./redirectNormal.css";

export default function Redirect() {
  const [time, setTime] = useState(7);
  const timeout = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      setTime((t) => t - 1);
    }, 1000);

    if (time <= 0) navigate("/");
    return () => clearTimeout(timeout.current);
  }, [time]);

  return (
    <div className="redirect">
      <p>
        <strong>Redirecting...</strong> You will be redirected to the home page
        in
        <span className="redirect__time flick">{time}</span> seconds.
        <br />
      </p>
    </div>
  );
}
