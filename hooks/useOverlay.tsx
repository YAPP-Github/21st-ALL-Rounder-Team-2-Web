import { useState, useEffect } from "react";

const useOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
    window.history.pushState(null, "", "");
  };

  const close = () => {
    setIsOpen(false);
    window.history.back();
  };

  useEffect(() => {
    const onPopState = () => {
      if (isOpen) setIsOpen(false);
    };

    window.addEventListener("popstate", onPopState);
    return () => {
      window.removeEventListener("popstate", onPopState);
    };
  }, [isOpen]);

  return { isOpen, open, close };
};

export default useOverlay;
