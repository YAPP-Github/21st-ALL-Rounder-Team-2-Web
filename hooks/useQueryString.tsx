import { useCallback } from "react";
import { useSearchParams } from "next/navigation";

export const useQueryString = () => {
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const replaceQueryString = useCallback((name: string, value: string) => {
    const params = new URLSearchParams();
    params.set(name, value);

    return params.toString();
  }, []);

  return { createQueryString, replaceQueryString };
};
