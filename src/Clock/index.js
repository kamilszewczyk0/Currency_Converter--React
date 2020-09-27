import React from "react";
import {Display} from "./styled";
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

  return <Display>Today is {dateFormat(date)}</Display>;
};

export default Clock;
