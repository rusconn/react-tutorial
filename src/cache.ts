import { InMemoryCache, makeVar } from "@apollo/client/cache";

import { Maybe, Player } from "./generated/types";

export const playerVar = makeVar(Player.Cross);
export const winnerVar = makeVar<Maybe<Player>>(undefined);
export const sizeVar = makeVar(3);
export const squaresVar = makeVar([...Array<Maybe<Player>>(3 ** 2)]);

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        player: {
          read() {
            return playerVar();
          },
        },
        winner: {
          read() {
            return winnerVar();
          },
        },
        size: {
          read() {
            return sizeVar();
          },
        },
        squaresVar: {
          read() {
            return squaresVar();
          }
        }
      },
    },
  },
});
