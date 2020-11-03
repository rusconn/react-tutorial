import React, { FunctionComponent } from "react";

import { useStatus } from "../hooks/useStatus";

export const Status: FunctionComponent = () => {
  const status = useStatus();

  return (
    <div className="status">
      {status.message}
    </div>
  );
};
