import { ReactElement, useEffect, useState, cloneElement } from "react";
import "@/styles/keyframes.css";

type Props = {
  isOpen: boolean;
  children: ReactElement;
};

export const AnimatePresence = ({ isOpen, children }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) setIsVisible(true);
  }, [isOpen]);

  const handleAnimationEnd = () => {
    if (!isOpen) setIsVisible(false);
  };

  return isVisible
    ? cloneElement(children, {
        isOpen,
        onAnimationEnd: handleAnimationEnd,
      })
    : null;
};
