import Icon from "@/components/Icon/Icon/Icon";
import NextImage from "next/image";
import { ComponentProps, ReactNode, useState } from "react";
import * as S from "./Image.styles";

type Props = { loadingFallback?: ReactNode; errorFallback?: ReactNode } & ComponentProps<typeof NextImage>;

export const Image = (props: Props) => {
  const {
    style,
    loadingFallback,
    errorFallback = (
      <S.ErrorFallbackWrapper style={{ ...style }}>
        <Icon name="PictureIcon" />
      </S.ErrorFallbackWrapper>
    ),
    ...rest
  } = props;

  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  if (isError) return <>{errorFallback}</>;

  return (
    <>
      <S.Fade isLoaded={isLoaded}>
        <NextImage
          {...rest}
          style={{ ...style }}
          onLoad={() => {
            setIsLoaded(true);
          }}
          onError={() => {
            setIsLoaded(true);
            setIsError(true);
          }}
        />
      </S.Fade>
      {!isLoaded && loadingFallback}
    </>
  );
};
