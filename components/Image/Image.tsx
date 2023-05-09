import NextImage from "next/image";
import { ComponentProps, ReactNode, useState } from "react";

type Props = { loadingFallback?: ReactNode } & ComponentProps<typeof NextImage>;

export const Image = (props: Props) => {
  const { style, loadingFallback, ...rest } = props;
  const [isLoaded, setIsLoaded] = useState(false);

  const opacity = isLoaded ? 1 : 0;

  return (
    <>
      <NextImage
        {...rest}
        style={{ ...style, opacity, transition: "opacity .3s" }}
        onLoad={() => {
          setIsLoaded(true);
        }}
      />
      {!isLoaded && loadingFallback}
    </>
  );
};
