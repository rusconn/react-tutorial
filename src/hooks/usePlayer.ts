import { useState } from "react";

import { Player } from "../types";

export const usePlayer = () => {
  const initial = Player.Cross;

  const [next, setNext] = useState(initial);

  const init = () => setNext(initial);

  const change = () =>
    setNext(next === Player.Cross ? Player.Circle : Player.Cross);

  return { next, init, change };
};
