import React, { FunctionComponent } from "react";
import range from "lodash/range";

import { MaybePlayer } from "../types";
import { Row } from "./Row";

interface Props {
  size: number;
  squares: MaybePlayer[];
  onSquareClick: (nth: number) => void;
}

export const Board: FunctionComponent<Props> = (props) => (
  <div className="game-board">
    {range(props.size).map((row) => (
      <Row
        key={row}
        size={props.size}
        squares={props.squares.slice(row * props.size, (row + 1) * props.size)}
        onClick={(column: number) =>
          props.onSquareClick(row * props.size + column)
        }
      />
    ))}
  </div>
);
