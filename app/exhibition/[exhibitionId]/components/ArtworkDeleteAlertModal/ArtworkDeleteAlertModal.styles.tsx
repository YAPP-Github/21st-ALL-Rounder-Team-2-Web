import styled from "styled-components";
import { Bold18CSS } from "@/components/Typographies";
import { colors } from "@/styles/colors";
import Modal from "@/components/Modal/Modal";

export const Wrapper = styled.div`
  margin-top: 25px;
  margin-bottom: 16px;
`;

export const ModalTitle = styled(Modal.Title)`
  line-height: 150%;
  margin-bottom: 8px;
`;

export const ModalDescription = styled(Modal.Description)`
  margin-bottom: 32px;
`;

export const Options = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;

  & > button {
    padding: 12px 30px;
    border-radius: 50px;
    ${Bold18CSS};
  }

  & > button:nth-child(1) {
    background-color: ${colors.gray600};
  }

  & > button:nth-child(2) {
    background-color: ${colors.green900};
  }
`;
