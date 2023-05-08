import * as S from "./Skeleton.styles";

export type Props = {
  className?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  animation?: "wave" | "purse";
};

export const Skeleton = (props: Props) => {
  const { width = "100%", height = "100%", animation = "wave", ...rest } = props;

  return <S.Skeleton width={width} height={height} animation={animation} {...rest} />;
};
