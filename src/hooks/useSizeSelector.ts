import { ChangeEvent, useState } from "react";
import range from "lodash/range";

export const useSizeSelector = () => {
  const sizes = range(3, 10 + 1);

  const [size, setSize] = useState(sizes[0]);

  const onChange = (event: ChangeEvent<HTMLSelectElement>) =>
    setSize(Number(event.currentTarget.value));

  return { size, sizes, onChange };
};
