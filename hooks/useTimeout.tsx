import { DependencyList, useEffect } from "react";

export const useTimeout = (callback: () => void, delay?: number) => {
  useEffect(() => {
    if (!delay) return;

    const timerId = setTimeout(() => {
      console.log("timeout");
      callback();
    }, delay);

    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [delay]);
};
