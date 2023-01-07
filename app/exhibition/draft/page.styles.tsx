import styled from "styled-components";
import Button from "../../../components/ui/Button/Button/Button";
import { colors } from "../../../styles/colors";

export const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  background: ${colors.bgColor};
`;

export const Content = styled.div`
  padding: 21px 16px;
  padding-bottom: 160px;
`;

export const Dimmed = styled.div`
  position: fixed;
  bottom: 0;

  padding: 53px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 100%;
  height: 214px;

  background: linear-gradient(
    180deg,
    rgba(22, 22, 22, 0) 2.04%,
    #161616 46.17%
  );
`;

export const SaveButton = styled(Button)`
  width: 100%;
  height: 62px;
  padding: 20px;
`;
