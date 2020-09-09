import React from "react";
import "./style.css";
import {useCurrentDate} from "./useCurrentDate";

const dateFormat = (date) =>
  date.toLocaleString("en", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

const Clock = () => {
  const date = useCurrentDate();

  return <p className="clock">Today is {dateFormat(date)}</p>;
};

export default Clock;
