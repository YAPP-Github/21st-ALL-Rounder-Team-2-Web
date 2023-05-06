import { useTimeout } from "@/hooks/useTimeout";
import { ToastProps } from "@/components/Toast/Toast.type";
import { useToastContext } from "@/components/Toast/Toast.provider";
import * as S from "./Toast.styles";

export const Toast = (props: ToastProps) => {
  const {
    type = "default",
    content = "",
    duration = 3000,
    position = "bottom",
    isOpen = true,
    isClosable = false,
    className,
  } = props;
  const { unmount, hide } = useToastContext();

  const close = async () => {
    hide();
    await new Promise((resolve) => setTimeout(resolve, S.ANIMATION_DURATION));
    unmount();
  };

  useTimeout(close, duration);

  return (
    <S.Toast position={position} isOpen={isOpen} className={className}>
      {type === "alert" && <S.IconStyled name="AlertCircleIcon" />}
      {content}
    </S.Toast>
  );
};
