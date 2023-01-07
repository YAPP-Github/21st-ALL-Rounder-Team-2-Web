"use client";

import { useQuery } from "@tanstack/react-query";
import ExhibitionWorkCardList from "../../../components/pages/ExhibitionWorkCardList/ExhibitionWorkCardList";
import ExhibitionInfoHeader from "../../../components/pages/ExhibitionInfoHeader/ExhibitionInfoHeader";
import { getExhibitionWorkList } from "../../../apis/exhibition";
import * as S from "./page.styles";

export default function Page() {
  const { data: exhibitionWorkList } = useQuery({
    queryKey: ["exhibitionWorkList"],
    queryFn: getExhibitionWorkList,
  });

  return (
    <S.Wrapper>
      <ExhibitionInfoHeader
        mainImageUrl={
          exhibitionWorkList ? exhibitionWorkList[0].imageUrl : null
        }
      />
      <S.Content>
        <ExhibitionWorkCardList exhibitionWorkList={exhibitionWorkList ?? []} />
      </S.Content>
      <S.GradientDimmed />
    </S.Wrapper>
  );
}
