import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  children: React.ReactNode;
};

const Portal = ({ children }: Props) => {
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    setIsMount(true);
  }, []);

  if (!isMount) return null;

  return (
    <>
      {createPortal(
        children,
        document.getElementById("overlay-root") as HTMLElement
      )}
    </>
  );
};

export default Portal;
