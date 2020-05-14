import React from "react";

export default function Commit(props) {
  console.log(props.commit.date);
  return (
    <li>
      <h3>{props.commit.repo.split("/")[1]}</h3>
      <ul>
        {/* <li>Date: {props.commit.date}</li> */}
        <li>Message: {props.commit.message}</li>
      </ul>
    </li>
  );
}
