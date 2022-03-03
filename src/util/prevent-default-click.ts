/* eslint-disable @typescript-eslint/no-explicit-any */
import { MouseEvent } from "react";

export function preventDefaultClick(event?: (e: MouseEvent<any>) => void) {
  return (e: MouseEvent<any>) => {
    e.preventDefault();
    event?.(e);
  };
}
