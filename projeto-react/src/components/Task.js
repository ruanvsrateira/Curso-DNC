import { Fragment } from "react";

export const Task = (props) => {
  return (
    <Fragment>
      <input type="checkbox" />
      {props.text}
    </Fragment>
  );
};
