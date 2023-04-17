"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Category } from "../Category/Category";
import { useGetCategoryList } from "@/hooks/category";
import { useQueryString } from "@/hooks/useQueryString";
import * as S from "./CategoryList.styles";

export const CategoryList = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replaceQueryString } = useQueryString();
  const { data: categories } = useGetCategoryList();

  return (
    <S.Wrapper>
      <Link href={pathname}>
        <Category active={!searchParams.get("category")} text="전체 기록" />
      </Link>
      {categories?.map(({ id, name }) => (
        <Link href={pathname + "?" + replaceQueryString("category", String(id))} key={id}>
          <Category active={searchParams.get("category") === String(id)} text={name} />
        </Link>
      ))}
    </S.Wrapper>
  );
};
