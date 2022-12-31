import React from "react";
import { SvgIcons } from "../svg"

export type IconType = keyof typeof SvgIcons

export interface Props {
  className?: string;
  name: IconType;
  size?: number;
  color?: string;
}

export const Icon = (props: Props) => {
  const { name, size, color } = props;
  const TargetComponent = SvgIcons[name]
  return <TargetComponent fontSize={size} color={color} />
}

export default Icon;
