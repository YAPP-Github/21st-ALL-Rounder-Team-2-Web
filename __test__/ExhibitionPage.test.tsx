import { fireEvent, screen, waitForElementToBeRemoved } from "@testing-library/react";
import { renderWithClient } from "@/__test__/test-utils";
import { server } from "@/jest.setup";
import { rest } from "msw";
import { useRouter } from "next/navigation";
import { exhibitionList } from "@/mocks/data/exhibition";
import { artworkList } from "@/mocks/data/artwork";
import { BASE_PATH } from "@/__generate__/artwork/base";
import { ExhibitInformationHeader } from "@/components/pages/ExhibitInformationHeader/ExhibitInformationHeader";
import { LinkPreviewCard, LinkPreviewCardSkeleton } from "@/components/pages/LinkPreviewCard/LinkPreviewCard";
import { CustomSuspense } from "@/components/ui/CustomSuspense/CustomSuspense";
import ArtworkCardList from "@/components/pages/ArtworkCardList/ArtworkCardList";
import styles from "@/app/exhibition/page.module.css";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Exhibition Page", () => {
  const mockRouter = { push: jest.fn() };
  (useRouter as jest.Mock).mockReturnValue(mockRouter);

  const Page = (
    <>
      <ExhibitInformationHeader exhibitionId={1} />
      <div className={styles.content}>
        <CustomSuspense fallback={<LinkPreviewCardSkeleton />}>
          <LinkPreviewCard link="artie.com" />
        </CustomSuspense>
        <ArtworkCardList exhibitionId={1} />
      </div>
    </>
  );

  beforeEach(() => {
    renderWithClient(Page);
  });

  beforeAll(() => {
    const overlayRoot = document.createElement("div");
    overlayRoot.setAttribute("id", "overlay-root");
    document.body.appendChild(overlayRoot);
  });

  test("전시의 상세 정보를 보여준다.", async () => {
    expect(await screen.findByText(exhibitionList[0].name)).toBeInTheDocument();
  });

  test("해당 전시 기록에 등록된 작품 목록을 보여준다.", async () => {
    expect(await screen.findByText(artworkList[0].name ?? "작품명 미입력")).toBeInTheDocument();
  });

  test("[작품추가] 버튼을 누르면 이미지 업로드 선택 모달이 뜬다.", async () => {
    fireEvent.click(await screen.findByRole("button", { name: "작품추가" }));
    expect(await screen.findByText("무엇으로 기록할까요?")).toBeInTheDocument();
  });

  test("더보기 아이콘을 누르면 액션시트가 뜬다.", async () => {
    fireEvent.click((await screen.findAllByLabelText("더보기"))[0]);
    expect(await screen.findByText("닫기")).toBeInTheDocument();
  });

  test("[대표이미지로 등록]을 누르면 상단의 이미지가 해당 작품 이미지로 변경된다.", async () => {
    fireEvent.click((await screen.findAllByLabelText("더보기"))[0]);
    fireEvent.click(screen.getByText("대표 이미지로 선택"));

    expect(await screen.findByAltText("대표 사진")).toHaveAttribute("src", artworkList[0].imageURL);
  });

  test("[삭제]를 누르면 해당 작품이 삭제된다.", async () => {
    fireEvent.click((await screen.findAllByLabelText("더보기"))[0]);
    fireEvent.click(await screen.findByText("삭제"));

    await waitForElementToBeRemoved(screen.getByText(artworkList[0].name ?? "작품명 미입력"));
  });

  test("등록된 작품이 1개일 때 [삭제]를 누를 경우 경고 모달이 뜬다.", async () => {
    server.use(
      rest.get(`${BASE_PATH}/artwork/post/1`, (_, res, ctx) => {
        return res(ctx.json({ content: [artworkList[0]] }));
      })
    );
    renderWithClient(Page);

    fireEvent.click(await screen.findByLabelText("더보기"));
    fireEvent.click(await screen.findByText("삭제"));

    expect(await screen.findByText("마지막 작품기록이에요")).toBeInTheDocument();
  });

  test("[게시글 수정]을 누르면 해당 작품 정보 편집 페이지로 이동한다.", async () => {
    fireEvent.click((await screen.findAllByLabelText("더보기"))[0]);
    fireEvent.click(await screen.findByText("게시글 수정"));

    expect(mockRouter.push).toHaveBeenCalledWith(`/exhibition/1/${artworkList[0].id}?edit=true`);
  });

  test("작품 카드를 누르면 해당 작품 정보 페이지로 이동한다.", async () => {
    expect((await screen.findAllByRole("link"))[0]).toHaveAttribute("href", `/exhibition/1/${artworkList[0].id}`);
  });
});
