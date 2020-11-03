import React, { FunctionComponent } from "react";

import { Board } from "./Board";
import { Info } from "./Info";
import { SizeSelector } from "./SizeSelector";
import { Status } from "./Status";

export const Game: FunctionComponent = () => (
  <div className="game">
    <Status />
    <SizeSelector />
    <Board />
    <Info />
  </div>
);
