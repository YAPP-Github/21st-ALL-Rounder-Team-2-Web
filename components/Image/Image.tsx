import NextImage from "next/image";
import { ComponentProps, ReactNode, useState } from "react";
import * as S from "./Image.styles";

type Props = { loadingFallback?: ReactNode } & ComponentProps<typeof NextImage>;

export const Image = (props: Props) => {
  const { style, loadingFallback, ...rest } = props;
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <S.Fade isLoaded={isLoaded}>
        <NextImage
          {...rest}
          style={{ ...style }}
          onLoad={() => {
            setIsLoaded(true);
          }}
        />
      </S.Fade>
      {!isLoaded && loadingFallback}
    </>
  );
};
