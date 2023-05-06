export type ToastType = "default" | "alert";

export type ToastPosition = "top" | "bottom";

export type ToastProps = {
  type?: ToastType;
  content?: string | React.ReactNode;
  position?: ToastPosition;
  duration?: number;
  isOpen?: boolean;
  isClosable?: boolean;
  className?: string;
};

export type ToastMethods = {
  mount: (toast: ToastProps) => void;
  unmount: () => void;
  hide: () => void;
};
