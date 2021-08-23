import type { Component } from "solid-js";
import { AttributifyAttributes } from "windicss/types/jsx";

interface Props extends AttributifyAttributes {}

const VStack: Component<Props> = ({ flex, ...rest }) => {
  return (
    <div
      display="flex"
      flex={`col${flex && ` ${flex}`}`}
      justify="center"
      {...rest}
    />
  );
};
export default VStack;
