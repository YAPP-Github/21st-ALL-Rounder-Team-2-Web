import { rest } from "msw";
import { BASE_PATH } from "@/__generate__/post/base";
import { exhibitionList } from "../data/exhibition";

export const handlers = [
  rest.get(`${BASE_PATH}/post/home`, (req, res, ctx) => {
    const size = req.url.searchParams.get("size") ?? 20;
    const page = req.url.searchParams.get("page") ?? 0;
    const direction = req.url.searchParams.get("direction") ?? "DESC";
    const category = req.url.searchParams.get("category");

    let content = exhibitionList;
    if (category) content = content.filter((e) => e.categoryId === Number(category));
    if (direction === "ASC") content = content.slice().reverse();
    content = content.slice(+size * +page, +size * (+page + 1) + 1);

    return res(ctx.delay(), ctx.status(200), ctx.json({ content }));
  }),

  rest.patch(`${BASE_PATH}/post/pin`, (req, res, ctx) => {
    const id = req.url.searchParams.get("id");
    const pinned = req.url.searchParams.get("pinned") ?? "true";

    exhibitionList.forEach((e, i) => {
      if (e.id === Number(id)) exhibitionList[i].pinned = pinned === "true" ? true : false;
      else exhibitionList[i].pinned = false;
    });

    return res(ctx.delay(), ctx.status(204));
  }),

  rest.get(`${BASE_PATH}/post/detail/:id`, (req, res, ctx) => {
    const { id } = req.params;

    const exhibition = exhibitionList.find((e) => e.id === Number(id));
    if (!exhibition) return res(ctx.status(404));

    return res(ctx.delay(), ctx.status(200), ctx.json(exhibition));
  }),

  rest.get(`${process.env.NEXT_PUBLIC_PROXY_URL}/*`, (_, res, ctx) => {
    return res(
      ctx.delay(),
      ctx.set("Content-Type", "text/html"),
      ctx.json(
        '<html><head><meta property="og:image" content="https://picsum.photos/900" /><meta property="og:title" content="Example Website" /><meta property="og:description" content="" /></head></html>'
      )
    );
  }),
];
