import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  width: calc(50% - 4px);
  height: auto;
  aspect-ratio: 175 / 200;
  border-radius: 8px;
  background-color: #f1f1f1;
`;

export const LargeContainer = styled(Container)`
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
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

  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const LargeTitleTextSpan = styled(TextSpan)`
  font-size: 20px;
  font-weight: 600;
`;

export const DateTextSpan = styled(TextSpan)`
  opacity: 0.8;
`;
