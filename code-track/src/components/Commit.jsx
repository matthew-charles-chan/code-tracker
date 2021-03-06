import React from "react";

export default function Commit(props) {
  return (
    <li>
      <h3>
        {props.commit.repo.split("/")[1]} (
        {props.commit.date.toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
        )
      </h3>
      <ul>
        <li>{props.commit.message}</li>
      </ul>
    </li>
  );
}
