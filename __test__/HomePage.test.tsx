import Page from "@/app/home/page";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithClient } from "@/__test__/test-utils";
import { server } from "@/jest.setup";
import { rest } from "msw";
import { categoryList } from "@/mocks/data/category";
import { exhibitionList } from "@/mocks/data/exhibition";
import { BASE_PATH } from "@/__generate__/post/base";

describe("Home Page", () => {
  beforeEach(() => {
    renderWithClient(<Page />);
  });

  test("카테고리 목록을 보여준다.", async () => {
    expect(await screen.findByText(categoryList[0].name)).toBeInTheDocument();
  });

  test("전체 전시 목록을 보여준다.", async () => {
    expect(await screen.findByText(exhibitionList[0].name)).toBeInTheDocument();
  });

  test("빈 전시 목록을 응답받는 경우 [전시기록 하러가기] 버튼을 보여준다.", async () => {
    server.use(rest.get(`${BASE_PATH}/post/home`, (_, res, ctx) => res(ctx.json([]))));
    expect(await screen.findByRole("button", { name: /전시기록 하러가기/i })).toBeInTheDocument();
  });

  test("카테고리 선택시 카테고리별 전시 목록을 보여준다.", async () => {
    fireEvent.click(await screen.findByText("계속 보고 싶은 전시👀"));
    expect(await screen.findByText("코엑스 아쿠아리움")).toBeInTheDocument();
  });

  test("[오래된순] 선택시 오래된 순으로 정렬된 전시 목록을 보여준다.", async () => {
    fireEvent.click(await screen.findByText("최신순"));
    fireEvent.click(await screen.findByText("오래된순"));

    const list = await screen.findAllByText(/\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])/);
    expect(list[0].textContent).toEqual("2023-01-07");
  });

  test("pin 버튼을 누르면 전시가 상단 고정된다.", async () => {
    fireEvent.click((await screen.findAllByLabelText("전시 고정하기"))[0]);
    expect(await screen.findByLabelText("전시 고정 해제하기")).toBeInTheDocument();
  });
});
