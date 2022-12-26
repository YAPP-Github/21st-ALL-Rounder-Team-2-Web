import { makeAction } from "./message";

describe("messages", () => {
  it("NAVIGATE_TO_EDIT", async () => {
    expect(makeAction(["NAVIGATE_TO_EDIT"])).toEqual({
      action: "NAVIGATE_TO_EDIT",
      payload: undefined,
    });
  });

  it("NAVIGATE_TO_EDIT", async () => {
    expect(makeAction(["NAVIGATE_TO_MY", { userId: "1" }])).toEqual({
      action: "NAVIGATE_TO_MY",
      payload: {
        userId: "1",
      },
    });
  });
});
