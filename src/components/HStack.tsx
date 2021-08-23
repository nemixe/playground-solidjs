import type { Component } from "solid-js";
import { AttributifyAttributes } from "windicss/types/jsx";

interface Props extends AttributifyAttributes {}

const HStack: Component<Props> = (props) => {
  return <div display="flex" align="items-center" {...props} />;
};
export default HStack;
