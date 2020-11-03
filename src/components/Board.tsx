import React, { FunctionComponent } from "react";
import range from "lodash/range";
import { useReactiveVar } from "@apollo/client";

import { sizeVar } from "../cache";
import { Row } from "./Row";

export const Board: FunctionComponent = () => {
  const size = useReactiveVar(sizeVar);

  return (
    <div className="game-board">
      {range(size).map((row) => (
        <Row key={row} row={row} />
      ))}
    </div>
  );
};
