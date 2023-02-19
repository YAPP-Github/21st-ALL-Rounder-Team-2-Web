import { useState, useCallback, useEffect } from "react";

const useOverlay = (defaultValue = false) => {
  const [isOpen, setIsOpen] = useState(defaultValue);

  const open = useCallback(() => {
    setIsOpen(true);
    window.history.pushState({ ...window.history.state }, "", "");
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    window.history.back();
  }, []);

  useEffect(() => {
    if (defaultValue) window.history.pushState({ ...window.history.state }, "", "");
  }, [defaultValue]);

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
