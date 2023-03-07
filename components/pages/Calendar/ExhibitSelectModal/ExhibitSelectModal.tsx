import Modal from "@/components/ui/Modal/Modal";
import { Divider } from "@/components/ui/Divider/Divider";
import Portal from "@/components/ui/Portal/Portal";
import Dimmed from "@/components/ui/Dimmed/Dimmed";
import { ExhibitByDateResponseDto } from "@/__generate__/post";
import * as S from "./ExhibitSelectModal.styles";

type Props = {
  selectedDate: String;
  exhibitList: Array<ExhibitByDateResponseDto>;
  onClose: () => void;
};

export const ExhibitSelectModal = ({ selectedDate, exhibitList, onClose }: Props) => {
  return (
    <Portal>
      <Dimmed onClick={onClose} />
      <Modal headline="전시를 선택해주세요" onClose={onClose}>
        <S.SelectList>
          {exhibitList.map(({ postName, postId }, index) => (
            <>
              <S.SelectItem key={postId}>
                <S.Name>{postName}</S.Name>
                <S.Date>{selectedDate}</S.Date>
              </S.SelectItem>
              {index !== exhibitList.length - 1 && <Divider />}
            </>
          ))}
        </S.SelectList>
      </Modal>
    </Portal>
  );
};
