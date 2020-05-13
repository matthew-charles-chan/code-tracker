import Commit from "./Commit";
import React from "react";
export default function List(props) {
  console.log(props);
  return (
    <ul>
      {props.commits.map((commit, index) => (
        <Commit key={index} commit={commit} />
      ))}
    </ul>
  );
}
