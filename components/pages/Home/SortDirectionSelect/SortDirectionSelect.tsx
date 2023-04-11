import Select from "@/components/ui/Select/Select";
import * as S from "./SortDirectionSelect.styles";

interface Props {
  selectedValue?: string;
  onSelected: (item: "ASC" | "DESC") => void;
}

export const SortDirectionSelect = (props: Props) => {
  const { selectedValue = "DESC", onSelected } = props;

  const handleSelect = (value: string) => {
    if (value === "DESC" || value === "ASC") onSelected(value);
  };

  return (
    <Select value={selectedValue} onValueChange={handleSelect}>
      <Select.Trigger>
        <S.SelectedValue>{selectedValue === "DESC" ? "최신순" : "오래된순"}</S.SelectedValue>
        <Select.Icon>{(isOpen) => <S.IconStyled name="ChevronDownIcon" $isOpen={isOpen} />}</Select.Icon>
      </Select.Trigger>
      <S.SelectList align="end">
        <Select.Item value="DESC">최신순</Select.Item>
        <Select.Item value="ASC">오래된순</Select.Item>
      </S.SelectList>
    </Select>
  );
};
