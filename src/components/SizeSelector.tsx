import React, { ChangeEvent, FunctionComponent } from "react";

interface Props {
  size: number;
  sizes: number[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const SizeSelector: FunctionComponent<Props> = (props) => (
  <div className="size-selector">
    <select onChange={props.onChange} value={props.size}>
      {props.sizes.map((size) => (
        <option key={size} value={size}>
          {size}
        </option>
      ))}
    </select>
  </div>
);
