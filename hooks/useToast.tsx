import { useToastContext } from "@/components/Toast/Toast.provider";

export const useToast = () => {
  const { mount, unmount } = useToastContext();

  return { open: mount, close: unmount };
};
