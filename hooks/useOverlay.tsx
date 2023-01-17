import { useState, useCallback } from "react";

const useOverlay = () => {
  const [isShow, setIsShow] = useState(false);

  const showOverlay = useCallback(() => {
    setIsShow(true);
  }, []);

  const hideOverlay = useCallback(() => {
    setIsShow(false);
  }, []);

  return { isShow, showOverlay, hideOverlay };
};

export default useOverlay;
