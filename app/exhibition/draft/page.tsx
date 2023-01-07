"use client";

import { useQuery } from "@tanstack/react-query";
import ExhibitionWorkCardList from "../../../components/pages/ExhibitionWorkCardList/ExhibitionWorkCardList";
import ExhibitionInfoHeader from "../../../components/pages/ExhibitionInfoHeader/ExhibitionInfoHeader";
import { getExhibitionWorkDraftList } from "../../../apis/exhibition";
import { GradientDimmed } from "../[slug]/page.styles";
import * as S from "./page.styles";

export default function Page() {
  const { data: exhibitionWorkDraftList } = useQuery({
    queryKey: ["exhibitionWorkDraftList"],
    queryFn: getExhibitionWorkDraftList,
  });

  const handleSaveBtnClick = () => {};

  return (
    <S.Wrapper>
      <ExhibitionInfoHeader
        mainImageUrl={
          exhibitionWorkDraftList ? exhibitionWorkDraftList[0].imageUrl : null
        }
      />
      <S.Content>
        <ExhibitionWorkCardList
          exhibitionWorkList={exhibitionWorkDraftList ?? []}
        />
      </S.Content>
      <GradientDimmed />
      <S.SaveButton type="primary" onClick={handleSaveBtnClick}>
        전시기록 완성
      </S.SaveButton>
    </S.Wrapper>
  );
}
