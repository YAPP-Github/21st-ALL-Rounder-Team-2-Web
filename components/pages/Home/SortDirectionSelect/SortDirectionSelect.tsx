import React, { useRef, useState } from "react";
import useClickOutside from "@/hooks/useClickOutside";
import Icon from "../../../ui/Icon/Icon/Icon";
import * as S from "./SortDirectionSelect.styles";

interface Props {
  activeIndex?: number;
  onSelected: (index: number) => void;
}

export const SortDirectionSelect = (props: Props) => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const [isActive, setIsActive] = useState(false);
  const { activeIndex = 0, onSelected } = props;
  const selectItems = [{ text: "최신순" }, { text: "오래된순" }];

  const toggleSelectBox = () => {
    setIsActive((prev: boolean) => !prev);
  };

  useClickOutside(ref, toggleSelectBox, isActive);

  return (
    <S.Wrapper ref={ref}>
      <S.SelectWrapper onClick={toggleSelectBox}>
        <S.Text>{selectItems[activeIndex].text}</S.Text>
        <Icon name="ChevronDownIcon" />
      </S.SelectWrapper>
      {isActive && (
        <S.OptionWrapper>
          {selectItems.map((item, i) => (
            <S.Item
              key={i}
              active={activeIndex === i}
              onClick={() => {
                onSelected(i);
                toggleSelectBox();
              }}
            >
              {item.text}
            </S.Item>
          ))}
        </S.OptionWrapper>
      )}
    </S.Wrapper>
  );
};
