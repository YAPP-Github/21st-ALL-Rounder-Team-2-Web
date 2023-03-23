import { rest } from "msw";
import { BASE_PATH } from "@/__generate__/category/base";
import { categoryList } from "../data/category";

export const handlers = [
  rest.get(`${BASE_PATH}/category`, (req, res, ctx) => {
    return res(ctx.delay(), ctx.status(200), ctx.json(categoryList));
  }),
];
