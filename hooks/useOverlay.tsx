import { useState, useCallback, useEffect } from "react";

const useOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
    window.history.pushState({ ...window.history.state }, "", "");
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    window.history.back();
  }, []);

  useEffect(() => {
    const onPopState = () => {
      if (isOpen) setIsOpen(false);
    };

    window.addEventListener("popstate", onPopState);
    return () => {
      window.removeEventListener("popstate", onPopState);
    };
  }, [isOpen, close]);

  return { isOpen, open, close };
};

export default useOverlay;
