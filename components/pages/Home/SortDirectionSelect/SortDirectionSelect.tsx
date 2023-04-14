"use client";

import Select from "@/components/ui/Select/Select";
import { useSelect } from "@/hooks/useSelect";
import * as S from "./SortDirectionSelect.styles";

export const SortDirectionSelect = () => {
  const [direction, selectDirection] = useSelect<"ASC" | "DESC">("DESC");

  const handleSelectDirection = (value: string) => {
    if (value === "DESC" || value === "ASC") selectDirection(value);
  };

  return (
    <Select value={direction} onValueChange={handleSelectDirection}>
      <Select.Trigger>
        <S.SelectedValue>{direction === "DESC" ? "최신순" : "오래된순"}</S.SelectedValue>
        <Select.Icon>{(isOpen) => <S.IconStyled name="ChevronDownIcon" $isOpen={isOpen} />}</Select.Icon>
      </Select.Trigger>
      <S.SelectList align="end">
        <Select.Item value="DESC">최신순</Select.Item>
        <Select.Item value="ASC">오래된순</Select.Item>
      </S.SelectList>
    </Select>
  );
};
