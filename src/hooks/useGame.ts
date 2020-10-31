import { ChangeEvent } from "react";
import range from "lodash/range";

import { MaybePlayer } from "../types";
import { allShallowEqual } from "../lib";
import { useBoard } from "./useBoard";
import { usePlayer } from "./usePlayer";
import { useSizeSelector } from "./useSizeSelector";

const calculateWinner = (size: number, squares: MaybePlayer[]) => {
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

export const useGame = () => {
  const player = usePlayer();
  const sizeSelector = useSizeSelector();

  const board = useBoard({
    size: sizeSelector.size,
    nextPlayer: player.next,
    changePlayer: player.change,
  });

  const winner = calculateWinner(board.size, board.squares);
  const message = winner ? `Winner: ${winner}` : `Next player: ${player.next}`;

  return {
    status: { message },
    sizeSelector: {
      ...sizeSelector,
      onChange: (event: ChangeEvent<HTMLSelectElement>) => {
        player.init();
        board.init();
        sizeSelector.onChange(event);
      },
    },
    board: {
      ...board,
      onSquareClick: (nth: number) =>
        winner == null && board.onSquareClick(nth),
    },
  };
};
