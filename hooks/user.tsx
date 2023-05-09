import { useQuery } from "@tanstack/react-query";
import { getUserJoinDate } from "@/apis/user";

export const useGetUserJoinDate = () => {
  return useQuery({
    queryKey: ["userJoinDate"],
    queryFn: getUserJoinDate,
    staleTime: Infinity,
  });
};
