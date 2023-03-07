import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/apis/category";

export const useGetCategoryList = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
};
