import { getGifs } from "../../helpers/getGifs";

describe("testing the getGifs fetch function", () => {
  test("should return 10 elements", async () => {
    const gifs = await getGifs("random");
    expect(gifs.length).toBe(5);
  });
  test("should return 0 gifs if the string is empty", async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);
  });
});
