import React from "react";
import "./style.css";
import {useCurrentDate} from "./useCurrentDate";

const dateFormat = (date) =>
  date.toLocaleString("en-GB", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

const Clock = () => {
  const date = useCurrentDate();

  return <p className="clock">Today is {dateFormat(date)}</p>;
};

export default Clock;
