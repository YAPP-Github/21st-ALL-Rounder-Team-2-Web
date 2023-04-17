import { getQueryClient } from "@/libs/react-query-ssr/getQueryClient";
import { getCategories } from "@/apis/category";

export const useFetchCategoryList = async () => {
  const queryClient = getQueryClient();
  const data = await queryClient.fetchQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
  return data;
};
