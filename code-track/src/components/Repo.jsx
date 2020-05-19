import React from "react";

import RepoWeek from "./RepoWeek";

export default function RepoWeeks(props) {
  console.log(props.repo.weeks);
  return (
    <section>
      <h1>{props.repo.name}:</h1>
      <ul>
        {props.repo.weeks &&
          props.repo.weeks.map((week, index) => (
            <RepoWeek key={index} week={week} />
          ))}
      </ul>
    </section>
  );
}
