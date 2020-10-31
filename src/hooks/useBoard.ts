import { useState } from "react";

import { MaybePlayer, Player } from "../types";

interface Params {
  size: number;
  nextPlayer: Player;
  changePlayer: () => void;
}

export const useBoard = (params: Params) => {
  const initial = [...Array<undefined>(params.size ** 2)];

  const [squares, setSquares] = useState<MaybePlayer[]>(initial);

  const init = () => setSquares(initial);

  const onSquareClick = (nth: number) => {
    if (squares[nth] != null) {
      return;
    }

    const copied = squares.slice();
    copied[nth] = params.nextPlayer;
    setSquares(copied);
    params.changePlayer();
  };

  return { size: params.size, squares, init, onSquareClick };
};
