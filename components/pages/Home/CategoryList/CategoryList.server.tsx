import { Hydrate } from "@tanstack/react-query";
import { getDehydratedState } from "@/libs/react-query-ssr/getDehydratedState";
import { useFetchCategoryList } from "@/hooks/category.server";
import { CategoryList as CategoryListClient } from "@/components/pages/Home/CategoryList/CategoryList";

export const CategoryList = async () => {
  await useFetchCategoryList();
  const dehydratedState = getDehydratedState();

  return (
    <Hydrate state={dehydratedState}>
      <CategoryListClient />
    </Hydrate>
  );
};
