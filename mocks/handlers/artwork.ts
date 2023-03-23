import { rest } from "msw";
import { BASE_PATH } from "@/__generate__/artwork/base";
import { artworkList } from "@/mocks/data/artwork";
import { exhibitionList } from "@/mocks/data/exhibition";

export const handlers = [
  rest.get(`${BASE_PATH}/artwork/post/:id`, (req, res, ctx) => {
    return res(ctx.delay(), ctx.json({ content: artworkList }));
  }),

  rest.get(`${BASE_PATH}/artwork/:id`, (req, res, ctx) => {
    const { id } = req.params;

    const artwork = artworkList.find((e) => e.id === Number(id));
    if (!artwork) return res(ctx.status(404));

    return res(ctx.delay(), ctx.status(200), ctx.json(artwork));
  }),

  rest.patch(`${BASE_PATH}/artwork/main/:id`, (req, res, ctx) => {
    const { id } = req.params;

    const selectedArtwork = artworkList.find((e) => e.id === Number(id));
    if (!selectedArtwork) return res(ctx.status(404));

    const idx = exhibitionList.findIndex((e) => e.id === 1);
    exhibitionList[idx].mainImage = selectedArtwork.imageURL;

    return res(ctx.delay(), ctx.status(204));
  }),

  rest.delete(`${BASE_PATH}/artwork/:id`, (req, res, ctx) => {
    const { id } = req.params;

    const idx = artworkList.findIndex((e) => e.id === Number(id));
    if (idx === -1) return res(ctx.status(404));

    artworkList.splice(Number(idx), 1);
    return res(ctx.delay(), ctx.status(204));
  }),

  rest.patch(`${BASE_PATH}/artwork/:id`, async (req, res, ctx) => {
    const { id } = req.params;
    const newArtworkInfo = await req.json();

    const idx = artworkList.findIndex((e) => e.id === Number(id));
    artworkList[idx] = { ...artworkList[idx], ...newArtworkInfo };

    return res(ctx.delay(), ctx.status(204));
  }),
];
