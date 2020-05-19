import React from "react";

export default function RepoWeek(props) {
  return props.week.map((day) => (
    <li>
      <h5>
        {day.date.toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </h5>
      <ul>
        <li>{day.count}</li>
      </ul>
    </li>
  ));
}
