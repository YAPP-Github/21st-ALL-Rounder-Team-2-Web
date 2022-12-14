import React, { useRef, useState } from "react";
import * as S from "./Select.styles";
import useClickOutside from "../../../hooks/useClickOutside";
import Icon from "../Icon/Icon/Icon";
import { colors } from "../../../styles/colors";

interface Props {
  activeIndex?: number;
  onSelected: (index: number) => void;
}

export const Select = (props: Props) => {
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
                toggleSelectBox()
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
