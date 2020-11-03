import { Player } from "./generated/types";

export const allShallowEqual = (xs: unknown[]) => xs.every((x) => x === xs[0]);

export const playerToString = (player: Player) => ({
  [Player.Cross]: "X",
  [Player.Circle]: "O",
})[player];
