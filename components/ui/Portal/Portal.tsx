import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Dimmed from "../Dimmed/Dimmed";
import * as S from "./Portal.styles";

type Props = {
  children: React.ReactNode;
};

const Portal = ({ children }: Props) => {
  const [isTarget, setIsTarget] = useState(false);

  useEffect(() => {
    setIsTarget(true);
  }, []);

  if (!isTarget) return null;

  const backdrop = document.getElementById("backdrop") as HTMLElement;
  const overlay = document.getElementById("overlay") as HTMLElement;

  return (
    <>
      {createPortal(<Dimmed />, backdrop)}
      {createPortal(<S.OverlayWrapper>{children}</S.OverlayWrapper>, overlay)}
    </>
  );
};

export default Portal;
