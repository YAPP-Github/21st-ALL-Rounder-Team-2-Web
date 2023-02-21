import { useEffect, useState } from "react";

type Props = {
  isOpen: boolean;
  children: React.ReactNode;
};

const Animated = ({ isOpen, children }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) setIsVisible(true);
  }, [isOpen]);

  const handleAnimationEnd = () => {
    if (!isOpen) setIsVisible(false);
  };

  return isVisible ? <div onAnimationEnd={handleAnimationEnd}>{children}</div> : null;
};

export default Animated;
