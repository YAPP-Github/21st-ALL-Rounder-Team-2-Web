"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Category } from "../Category/Category";
import { useGetCategoryList } from "@/hooks/category";
import { useCreateQueryString } from "@/hooks/useCreateQueryString";
import * as S from "./CategoryList.styles";

export const CategoryList = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { createQueryString } = useCreateQueryString();
  const { data: categories } = useGetCategoryList();

  return (
    <S.Wrapper>
      <Link href={pathname}>
        <Category active={!searchParams.get("category")} text="전체 기록" />
      </Link>
      {categories?.map(({ id, name }) => (
        <Link href={pathname + "?" + createQueryString("category", String(id))} key={id} prefetch={false}>
          <Category active={searchParams.get("category") === String(id)} text={name} />;
        </Link>
      ))}
    </S.Wrapper>
  );
};
