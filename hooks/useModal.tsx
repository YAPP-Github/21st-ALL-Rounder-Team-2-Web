import { useState, useCallback } from "react";

const useModal = () => {
  const [isShow, setIsShow] = useState(false);

  const showModal = useCallback(() => {
    setIsShow(true);
  }, []);

  const hideModal = useCallback(() => {
    setIsShow(false);
  }, []);

  return { isShow, showModal, hideModal };
};

export default useModal;
