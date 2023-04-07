import { dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "./getQueryClient";

export const getDehydratedState = () => {
  const queryClient = getQueryClient();
  return dehydrate(queryClient);
};
