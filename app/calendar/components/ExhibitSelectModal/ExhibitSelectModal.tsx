import Modal from "@/components/Modal/Modal";
import { Divider } from "@/components/Divider/Divider";
import Portal from "@/components/Portal/Portal";
import Dimmed from "@/components/Dimmed/Dimmed";
import { useGetExhibitsByDate } from "@/hooks/calendar";
import { toYYYYMMDD } from "@/utils/datetime";
import { sendMessage } from "@/libs/message/message";
import * as S from "./ExhibitSelectModal.styles";

type Props = {
  selectedDate: Date;
  onClose: () => void;
};

export const ExhibitSelectModal = ({ selectedDate, onClose }: Props) => {
  const { data: exhibitsByDate } = useGetExhibitsByDate(selectedDate);

  const handleSelectExhibit = (exhibitId: number) => {
    return (e: React.MouseEvent) => {
      sendMessage(["NAVIGATE_TO_EXHIBITION_DETAIL", { exhibitId }]);
    };
  };

  return (
    <Portal>
      <Dimmed onClick={onClose} />
      <Modal headline="전시를 선택해주세요" onClose={onClose}>
        <S.SelectList>
          {exhibitsByDate?.map(({ postName, postId }, index) => (
            <>
              <S.SelectItem key={postId} onClick={handleSelectExhibit(postId)}>
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
