import type { Component, JSX } from "solid-js";
import { AttributifyAttributes } from "windicss/types/jsx";

interface Props
  extends AttributifyAttributes,
    JSX.HTMLAttributes<HTMLDivElement> {
  class?: string;
}

const Box: Component<Props> = (props) => {
  return <div {...props} />;
};
export default Box;
