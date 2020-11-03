import { useReactiveVar } from "@apollo/client";

import { playerVar, winnerVar } from "../cache";
import { playerToString } from "../lib";

export const useStatus = () => {
  const winner = useReactiveVar(winnerVar);
  const player = useReactiveVar(playerVar);

  const message =
    winner != null
      ? `Winner: ${playerToString(winner)}`
      : `Next player: ${playerToString(player)}`;

  return { message };
};
