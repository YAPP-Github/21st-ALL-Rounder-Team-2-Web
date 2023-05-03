"use client";

import { useEffect } from "react";

type Props = {
  onVisible?: VoidFunction;
  onHidden?: VoidFunction;
};

export const useVisibilityChange = ({ onVisible, onHidden }: Props) => {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        onVisible?.();
      } else onHidden?.();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
};
