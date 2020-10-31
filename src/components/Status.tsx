import React, { FunctionComponent } from "react";

interface Props {
  message: string;
}

export const Status: FunctionComponent<Props> = (props) => (
  <div className="status">{props.message}</div>
);
