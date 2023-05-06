import { useState, createContext, useCallback, useMemo, PropsWithChildren, useContext } from "react";
import Portal from "@/components/Portal/Portal";
import { Toast } from "@/components/Toast/Toast";
import { ToastProps, ToastMethods } from "@/components/Toast/Toast.type";

export const ToastContext = createContext<ToastMethods | undefined>(undefined);

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (context === undefined) throw new Error("should be used within ToastProvider");

  return context;
};

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const [toast, setToast] = useState<ToastProps | null>(null);

  const mount = useCallback((toast: ToastProps) => {
    setToast(toast);
  }, []);

  const unmount = useCallback(() => {
    setToast(null);
  }, []);

  const hide = useCallback(() => {
    setToast((prev) => ({ ...prev, isOpen: false }));
  }, []);

  const context = useMemo(() => ({ mount, unmount, hide }), [mount, unmount, hide]);

  return (
    <ToastContext.Provider value={context}>
      {children}
      {toast && (
        <Portal>
          <Toast {...toast} />
        </Portal>
      )}
    </ToastContext.Provider>
  );
};
