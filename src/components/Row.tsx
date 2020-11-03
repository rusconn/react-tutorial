import React, { FunctionComponent } from "react";
import range from "lodash/range";
import { useReactiveVar } from "@apollo/client";

import { sizeVar } from "../cache";
import { Square } from "./Square";

interface Props {
  row: number;
}

export const Row: FunctionComponent<Props> = (props) => {
  const size = useReactiveVar(sizeVar);

  return (
    <div className="board-row">
      {range(size).map((column) => (
        <Square key={column} nth={props.row * size + column} />
      ))}
    </div>
  );
};
