import * as S from "./Fallback.styles";

export const UnknownError = ({ reset }: { reset: () => void }) => {
  return (
    <S.Wrapper>
      <S.Description>알 수 없는 에러가 발생했습니다</S.Description>
      <S.RetryButton onClick={reset}>다시 시도하기</S.RetryButton>
    </S.Wrapper>
  );
};
