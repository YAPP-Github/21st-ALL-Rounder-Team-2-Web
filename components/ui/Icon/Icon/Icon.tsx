import React from "react";
import { SvgIcons } from "../svg";

export type IconType = keyof typeof SvgIcons;

export interface Props {
  className?: string;
  name: IconType;
  size?: number;
  color?: string;
}

export const Icon = (props: Props) => {
  const { name, size, color } = props;
  const TargetComponent = SvgIcons[name];
  const fillProps = color ? { fill: color } : {}
  const sizeProps = size ? { width: size, height: size } : {}
  return (
    <TargetComponent {...fillProps} {...sizeProps} />
  );
};

export default Icon;
