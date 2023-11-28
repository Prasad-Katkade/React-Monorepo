import React from "react";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function Button({
  title,
  handleClick,
}: {
  title: string;
  handleClick: () => void;
}) {
  // eslint-disable-next-line react/button-has-type
  return <button onClick={handleClick}>{title}</button>;
}
