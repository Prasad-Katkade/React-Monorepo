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
  return <button className="ui-bg-orange-800 ui-h-8 ui-w-8 rounded ui-border-2 ui-border-sky-500" onClick={handleClick}>{title}</button>;
}
