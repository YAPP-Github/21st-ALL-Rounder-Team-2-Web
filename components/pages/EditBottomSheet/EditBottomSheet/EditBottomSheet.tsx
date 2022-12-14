import React, { useCallback, useState } from "react";
import Button from "../../../ui/Button/Button/Button";
import TextInput from "../../../ui/Input/TextInput/TextInput";
import * as S from "./EditBottomSheet.styles";
import { SubmitHandler, useForm } from "react-hook-form";

type FormStates = {
  author: string;
  name: string;
  inputTag: string;
};

export type FormData = Omit<FormStates, "inputTag"> & { tags: string[] };

export interface Props {
  className?: string;
  onSave?: (e: React.MouseEvent, form: FormData) => void;
  onContinue?: (e: React.MouseEvent, form: FormData) => void;
}

export const EditBottomSheet = (props: Props) => {
  const { className, onSave, onContinue } = props;
  const {
    register,
    handleSubmit,
    resetField,
    watch,
    formState: { errors },
  } = useForm<FormStates>();
  const inputTags = watch("inputTag");

  const [tags, setTags] = useState([
    "감정태그1",
    "감정태그2",
    "감정태그3",
    "감정태그4",
  ]);

  const handleInputTagKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const enterKey = "Enter";
      if (e.key === enterKey) {
        setTags((tags) => [...tags, inputTags]);
        resetField("inputTag");
      }
    },
    [inputTags, resetField]
  );

  const handleDeleteTag = useCallback(
    (e: React.MouseEvent, targetTag: string) => {
      setTags(tags.filter((tag) => tag !== targetTag));
    },
    [tags]
  );

  const handleSave = useCallback(
    (e: React.MouseEvent) => {
      const onSubmit: SubmitHandler<FormStates> = (data) => {
        onSave?.(e, { ...data, tags });
      };
      handleSubmit(onSubmit)(e);
    },
    [handleSubmit, onSave, tags]
  );

  const handleContinue = useCallback(
    (e: React.MouseEvent) => {
      const onSubmit: SubmitHandler<FormStates> = (data) => {
        onContinue?.(e, { ...data, tags });
      };
      handleSubmit(onSubmit)(e);
    },
    [handleSubmit, onContinue, tags]
  );

  return (
    <S.Wrapper className={className}>
      <S.SaveButton>
        <Button type="default" onClick={handleSave}>
          저장
        </Button>
      </S.SaveButton>
      <S.EditInputForm label="작가이름">
        <TextInput
          placeholder="작가 이름을 적어주세요."
          {...register("author")}
        />
      </S.EditInputForm>
      <S.EditInputForm label="작품명">
        <TextInput placeholder="작품명을 적어주세요." {...register("name")} />
      </S.EditInputForm>
      <S.EditInputForm label="감정태그">
        <TextInput
          placeholder="#감정 태그를 적어주세요."
          {...register("inputTag")}
          onKeyDown={handleInputTagKeyDown}
        />
        <S.EditTagList tags={tags} onDelete={handleDeleteTag} />
      </S.EditInputForm>
      <S.ContinueButton type="primary" onClick={handleContinue}>
        계속 촬영하기
      </S.ContinueButton>
    </S.Wrapper>
  );
};

export default EditBottomSheet;
