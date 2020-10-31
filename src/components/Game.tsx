import React, { FunctionComponent } from "react";

import { useGame } from "../hooks/useGame";
import { Board } from "./Board";
import { Info } from "./Info";
import { SizeSelector } from "./SizeSelector";
import { Status } from "./Status";

export const Game: FunctionComponent = () => {
  const { status, sizeSelector, board } = useGame();

  return (
    <div className="game">
      <Status {...status} />
      <SizeSelector {...sizeSelector} />
      <Board {...board} />
      <Info />
    </div>
  );
};
