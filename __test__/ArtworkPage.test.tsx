import Page from "@/app/exhibition/[exhibitionId]/[artworkId]/page";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithClient } from "@/__test__/test-utils";
import { artworkList } from "@/mocks/data/artwork";
import "jest-styled-components";

jest.mock("swiper/react", () => ({
  Swiper: ({ children }: { children: React.ReactNode }) => <div data-testid="Swiper">{children}</div>,
  SwiperSlide: ({ children }: { children: React.ReactNode }) => <div data-testid="SwiperSlide">{children}</div>,
}));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Artwork Page", () => {
  beforeEach(() => {
    renderWithClient(<Page params={{ exhibitionId: "1", artworkId: "1" }} />);
  });

  beforeAll(() => {
    const overlayRoot = document.createElement("div");
    overlayRoot.setAttribute("id", "overlay-root");
    document.body.appendChild(overlayRoot);
  });

  test(`작품 슬라이드의 개수는 ${artworkList.length}개다.`, async () => {
    expect(await screen.findAllByTestId("SwiperSlide")).toHaveLength(artworkList.length);
  });

  test(`${artworkList.length}개의 작품 썸네일 목록을 보여준다.`, async () => {
    expect(await screen.findAllByAltText("thumbnail")).toHaveLength(artworkList.length);
  });

  test("현재 슬라이드가 보여주는 작품의 썸네일은 border를 보여준다.", async () => {
    const thumbnail = await screen.findAllByAltText("thumbnail");
    expect(thumbnail[0].parentElement).not.toHaveStyleRule("border", "none");
  });

  test("작품 썸네일을 클릭하면 해당 썸네일은 border가 생긴다.", async () => {
    fireEvent.click((await screen.findAllByAltText("thumbnail"))[3]);
    const thumbnail = await screen.findAllByAltText("thumbnail");
    expect(thumbnail[3].parentElement).not.toHaveStyleRule("border", "none");
  });

  test("[편집] 버튼을 누르면 바텀시트가 뜬다.", async () => {
    fireEvent.click(await screen.findByText("편집"));
    expect(await screen.findByText("저장")).toBeInTheDocument();
  });
});
