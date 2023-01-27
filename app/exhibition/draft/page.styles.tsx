import styled from "styled-components";
import Button from "@/components/ui/Button/Button/Button";
import { colors } from "@/styles/colors";

export const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  background: ${colors.bgColor};
`;

export const Content = styled.div`
  padding: 21px 16px;
  padding-bottom: 160px;
`;

export const SaveButton = styled(Button)`
  position: fixed;
  bottom: 53px;
  left: 16px;
  width: calc(100% - 32px);
  height: 62px;
  padding: 20px;
`;

export const GradientDimmed = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 155px;

  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
  transform: rotate(-180deg);
`;
