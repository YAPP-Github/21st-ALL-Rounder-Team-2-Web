import { rest } from "msw";
import { BASE_PATH } from "@/__generate__/post/base";
import { exhibitionList } from "@/mocks/data/exhibition";
import { parseDate, toYYYYMMDD } from "@/utils/datetime";

export const handlers = [
  rest.get(`${BASE_PATH}/post/monthly`, (req, res, ctx) => {
    const calendar = exhibitionList.reduce(
      (acc: { [postDate: string]: { postId: number; postNum: number; imageURL: string } }, cur) => {
        const { id, postDate, mainImage } = cur;
        acc[postDate] = { postId: id, postNum: (acc[postDate]?.postNum ?? 0) + 1, imageURL: mainImage };
        return acc;
      },
      {}
    );

    const exhibitsByMonthly = Object.entries(calendar).reduce(
      (acc: Array<{ postDate: string; postId: number; postNum: number }>, cur) => {
        const [postDate, value] = cur;
        return [...acc, { postDate, ...value }];
      },
      []
    );

    return res(
      ctx.delay(),
      ctx.status(200),
      ctx.json(
        exhibitsByMonthly.filter((e) => {
          const { year, month } = parseDate(new Date(e.postDate));
          if (year === Number(req.url.searchParams.get("year")) && month === Number(req.url.searchParams.get("month")))
            return true;
          return false;
        })
      )
    );
  }),

  rest.get(`${BASE_PATH}/post/date`, (req, res, ctx) => {
    const year = Number(req.url.searchParams.get("year"));
    const month = Number(req.url.searchParams.get("month"));
    const day = Number(req.url.searchParams.get("day"));

    return res(
      ctx.delay(),
      ctx.status(200),
      ctx.json(
        exhibitionList
          .filter((e) => e.postDate === toYYYYMMDD(new Date(year, month - 1, day)))
          .map((e) => ({ postId: e.id, postName: e.name }))
      )
    );
  }),
];
