import styled from "styled-components";
import { colors } from "@/styles/colors";
import Button from "@/components/Button/Button/Button";
import InputForm from "@/components/Form/InputForm/InputForm";
import TagList from "@/components/Tag/TagList/TagList";

export const Wrapper = styled.div`
  background: #1f1f1f;
  box-shadow: 0px 2px 36px rgba(0, 0, 0, 0.12);
  border-radius: 16px 16px 0px 0px;
  padding-top: 24px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 53px;
`;

export const EditInputForm = styled(InputForm)`
  margin-bottom: 48px;
`;

export const EditTagList = styled(TagList)`
  margin-top: 16px;
`;

export const SaveButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 11px;
`;

export const ContinueButton = styled(Button)`
  width: 100%;
  height: 62px;
  background: ${colors.blue};
`;
