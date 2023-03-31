import { useRef, useEffect } from "react";

const useClickOutside = <T extends HTMLElement = HTMLDivElement>(handler: () => void) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      const el = ref.current;
      if (!el || (e.target instanceof HTMLElement && ref.current.contains(e.target))) return;
      handler();
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.addEventListener("mousedown", handleClickOutside);
  }, [handler]);

  return ref;
};

export default useClickOutside;
