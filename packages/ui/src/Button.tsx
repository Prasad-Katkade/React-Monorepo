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
  return <button className="bg-orange-800 h-8 w-8 rounded border-2 border-sky-500" onClick={handleClick}>{title}</button>;
}
