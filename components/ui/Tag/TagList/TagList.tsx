import React, { useCallback } from "react";
import Tag from "../Tag/Tag";
import * as S from "./TagList.styles";

export interface Props {
  className?: string;
  tags: string[];
  onDelete?: (e: React.MouseEvent, tag: string) => void;
}

export const TagList = (props: Props) => {
  const { className, tags, onDelete } = props;

  const handleDeleteTag = useCallback(
    (tag: string) => {
      return (e: React.MouseEvent) => {
        onDelete?.(e, tag);
      };
    },
    [onDelete]
  );

  return (
    <S.Wrapper className={className}>
      {tags.map((tag) => {
        return <Tag key={tag} name={tag} onDelete={handleDeleteTag(tag)} />;
      })}
    </S.Wrapper>
  );
};

export default TagList;
