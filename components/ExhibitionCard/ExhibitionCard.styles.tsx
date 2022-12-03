import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 175px;
  height: 200px;
  border-radius: 8px;
  background-color: #f1f1f1;
`;

export const LargeContainer = styled(Container)`
  width: 358px;
  height: 358px;
`;

export const InfoContainer = styled.div`
  position: absolute;
  left: 16px;
  bottom: 24px;

  display: flex;
  flex-direction: column;
`;

const TextSpan = styled.span`
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 400;
  line-height: 130%;
  color: #ffffff;
`;

export const TitleTextSpan = styled(TextSpan)`
  font-size: 16px;
  font-weight: 600;

  width: 143px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const LargeTitleTextSpan = styled(TextSpan)`
  font-size: 20px;
  font-weight: 600;
`;

export const DateTextSpan = styled(TextSpan)`
  opacity: 0.8;
`;
