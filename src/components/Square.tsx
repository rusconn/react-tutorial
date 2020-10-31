import React, { FunctionComponent } from "react";

import { MaybePlayer } from "../types";

interface Props {
  player: MaybePlayer;
  onClick: () => void;
}

export const Square: FunctionComponent<Props> = (props) => (
  <button className="square" onClick={props.onClick}>
    {props.player}
  </button>
);
