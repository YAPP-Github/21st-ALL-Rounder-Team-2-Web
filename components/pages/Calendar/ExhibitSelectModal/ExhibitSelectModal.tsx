import Modal from "@/components/ui/Modal/Modal";
import { Divider } from "@/components/ui/Divider/Divider";
import Portal from "@/components/ui/Portal/Portal";
import Dimmed from "@/components/ui/Dimmed/Dimmed";
import { useGetExhibitsByDate } from "@/hooks/calendar";
import { toYYYYMMDD } from "@/utils/datetime";
import * as S from "./ExhibitSelectModal.styles";

type Props = {
  selectedDate: Date;
  onClose: () => void;
};

export const ExhibitSelectModal = ({ selectedDate, onClose }: Props) => {
  const { data: exhibitsByDate } = useGetExhibitsByDate(selectedDate);

  return (
    <Portal>
      <Dimmed onClick={onClose} />
      <Modal headline="전시를 선택해주세요" onClose={onClose}>
        <S.SelectList>
          {exhibitsByDate?.map(({ postName, postId }, index) => (
            <>
              <S.SelectItem key={postId}>
                <S.Name>{postName}</S.Name>
                <S.Date>{toYYYYMMDD(selectedDate).replaceAll("-", ".")}</S.Date>
              </S.SelectItem>
              {index !== exhibitsByDate?.length - 1 && <Divider />}
            </>
          ))}
        </S.SelectList>
      </Modal>
    </Portal>
  );
};
