import { useRef, useEffect } from "react";

export type Props = {
  onIntersect: () => void;
  options?: IntersectionObserverInit;
};

export const useIntersectionObserver = ({ onIntersect, options }: Props) => {
  const targetRef = useRef(null);

  useEffect(() => {
    if (!targetRef.current) return;

    const observer = new IntersectionObserver(([entry]: IntersectionObserverEntry[]) => {
      if (!entry.isIntersecting) return;
      onIntersect();
    }, options);
    observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, [targetRef]);

  return targetRef;
};
