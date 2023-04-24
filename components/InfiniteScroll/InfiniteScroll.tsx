import { PropsWithChildren } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Props } from "@/hooks/useIntersectionObserver";

export const InfiniteScroll = ({ onIntersect, options, children }: PropsWithChildren<Props>) => {
  const targetRef = useIntersectionObserver({ onIntersect, options });

  return (
    <>
      {children}
      <div ref={targetRef} />
    </>
  );
};
