import React from "react";

export default function Commit(props) {
  console.log(props);
  return <li>{props.commit.message}</li>;
}
