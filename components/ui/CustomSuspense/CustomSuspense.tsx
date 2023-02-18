import { ComponentProps, Suspense, useState, useEffect } from "react";

export default function CustomSuspense(props: ComponentProps<typeof Suspense>) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? <Suspense {...props} /> : <>{props.fallback}</>;
}
