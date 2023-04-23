import React, { useCallback, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "@/components/ui/Button/Button/Button";
import TextInput from "@/components/ui/Input/TextInput/TextInput";
import * as S from "./EditBottomSheet.styles";

type FormStates = {
  artist: string;
  name: string;
  inputTag: string;
};

export type FormData = Omit<FormStates, "inputTag"> & { tags: string[] };

export interface Props {
  className?: string;
  defaultValues?: FormData;
  onSave?: (e: React.MouseEvent, form: FormData) => void;
  onContinue?: (e: React.MouseEvent, form: FormData) => void;
}

export const EditBottomSheet = (props: Props) => {
  const { className, onSave, onContinue, defaultValues } = props;
  const {
    register,
    handleSubmit,
    resetField,
    watch,
    formState: { errors },
  } = useForm<FormStates>({ defaultValues });
  const inputTags = watch("inputTag");

  const [tags, setTags] = useState(defaultValues?.tags ?? []);

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
        <TextInput placeholder="작가 이름을 적어주세요." {...register("artist")} maxLength={20} />
      </S.EditInputForm>
      <S.EditInputForm label="작품명">
        <TextInput placeholder="작품명을 적어주세요." {...register("name")} maxLength={20} />
      </S.EditInputForm>
      <S.EditInputForm label="감정태그 (최대 5개)">
        <TextInput
          placeholder={tags.length < 5 ? "#감정 태그를 적어주세요." : "#감정 태그는 최대 5개까지 가능합니다."}
          {...register("inputTag", { disabled: tags.length === 5 })}
          onKeyDown={handleInputTagKeyDown}
          maxLength={20}
        />
        <S.EditTagList tags={tags} onDelete={handleDeleteTag} />
      </S.EditInputForm>
      {onContinue && (
        <S.ContinueButton type="primary" onClick={handleContinue}>
          계속 촬영하기
        </S.ContinueButton>
      )}
    </S.Wrapper>
  );
};

export default EditBottomSheet;
