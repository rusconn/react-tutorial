import React, { FunctionComponent } from "react";
import range from "lodash/range";
import { useReactiveVar } from "@apollo/client";

import { playerVar, sizeVar, squaresVar, winnerVar } from "../cache";
import { allShallowEqual, playerToString } from "../lib";
import { Maybe, Player } from "../generated/types";

interface Props {
  nth: number;
}

const calculateWinner = (size: number, squares: Maybe<Player>[]) => {
  const horLines = range(size).map((i) => range(size).map((j) => size * i + j));
  const verLines = range(size).map((i) => range(size).map((j) => size * j + i));

  const diaLines = [
    range(size).map((i) => (size + 1) * i),
    range(size).map((i) => (size - 1) * (i + 1)),
  ];

  const allLines = [...horLines, ...verLines, ...diaLines];

  const repdigitLine = allLines.find((line) => {
    const lineSquares = line.map((i) => squares[i]);
    return lineSquares[0] != null && allShallowEqual(lineSquares);
  });

  return repdigitLine ? squares[repdigitLine[0]] : undefined;
};

export const Square: FunctionComponent<Props> = (props) => {
  const size = useReactiveVar(sizeVar);
  const winner = useReactiveVar(winnerVar);
  const player = useReactiveVar(playerVar);
  const squares = useReactiveVar(squaresVar);

  const onClick = () => {
    if (winner != null || squares[props.nth] != null) {
      return;
    }

    const copied = squares.slice();
    copied[props.nth] = player;
    const newSquares = squaresVar(copied);
    playerVar(player === Player.Cross ? Player.Circle : Player.Cross);
    winnerVar(calculateWinner(size, newSquares));
  };

  const maybePlayer = squares[props.nth];

  return (
    <button className="square" onClick={onClick}>
      {maybePlayer && playerToString(maybePlayer)}
    </button>
  );
};
