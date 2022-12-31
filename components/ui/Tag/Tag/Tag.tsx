import React from "react";
import { IconButton } from "../../Button/IconButton/IconButton";
import * as S from "./Tag.styles";

export interface Props {
  className?: string;
  name: string;
  onDelete?: (e: React.MouseEvent) => void;
}

export const Tag = (props: Props) => {
  const { className, name, onDelete } = props;
  return (
    <S.Wrapper className={className}>
      <S.TagName>{name}</S.TagName>
      <IconButton
        iconProps={{
          name: "XCircleIcon",
        }}
        onClick={onDelete}
      />
    </S.Wrapper>
  );
};

export default Tag;
