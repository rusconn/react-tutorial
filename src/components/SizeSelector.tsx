import React, { ChangeEvent, FunctionComponent } from "react";
import { range } from "lodash";
import { useReactiveVar } from "@apollo/client";

import { playerVar, sizeVar, squaresVar, winnerVar } from "../cache";
import { Player } from "../generated/types";

export const SizeSelector: FunctionComponent = () => {
  const size = useReactiveVar(sizeVar);

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const size = Number(event.currentTarget.value);
    sizeVar(size);
    playerVar(Player.Cross);
    winnerVar(undefined);
    squaresVar([...Array(size ** 2)]);
  };

  return (
    <div className="size-selector">
      <select onChange={onChange} value={size}>
        {range(3, 40 + 1).map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};
