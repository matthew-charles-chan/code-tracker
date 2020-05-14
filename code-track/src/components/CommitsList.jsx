import Commit from "./Commit";
import React from "react";
export default function List(props) {
  return (
    <section>
      <h1>Recent Commits:</h1>
      <ul>
        {props.commits.map((commit, index) => (
          <Commit key={index} commit={commit} />
        ))}
      </ul>
    </section>
  );
}
