import React, { FunctionComponent } from "react";
import range from "lodash/range";

import { MaybePlayer } from "../types";
import { Square } from "./Square";

interface Props {
  size: number;
  squares: MaybePlayer[];
  onClick: (column: number) => void;
}

export const Row: FunctionComponent<Props> = (props) => (
  <div className="board-row">
    {range(props.size).map((column) => (
      <Square
        key={column}
        player={props.squares[column]}
        onClick={() => props.onClick(column)}
      />
    ))}
  </div>
);
