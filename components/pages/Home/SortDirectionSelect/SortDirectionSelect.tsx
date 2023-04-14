"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Select from "@/components/ui/Select/Select";
import { useCreateQueryString } from "@/hooks/useCreateQueryString";
import * as S from "./SortDirectionSelect.styles";

export const SortDirectionSelect = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { createQueryString } = useCreateQueryString();

  const handleSelectDirection = (value: string) => {
    router.replace(pathname + "?" + createQueryString("direction", value));
  };

  const selectedDirection = searchParams.get("direction") ?? "DESC";

  return (
    <Select value={selectedDirection} onValueChange={handleSelectDirection}>
      <Select.Trigger>
        <S.SelectedValue>{selectedDirection === "DESC" ? "최신순" : "오래된순"}</S.SelectedValue>
        <Select.Icon>{(isOpen) => <S.IconStyled name="ChevronDownIcon" $isOpen={isOpen} />}</Select.Icon>
      </Select.Trigger>
      <S.SelectList align="end">
        <Select.Item value="DESC">최신순</Select.Item>
        <Select.Item value="ASC">오래된순</Select.Item>
      </S.SelectList>
    </Select>
  );
};
