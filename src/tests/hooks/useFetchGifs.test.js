import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("testing custom hook useFetchGifs", () => {
  test("should return the initial state", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("One Punch Man")
    );
    const { data, loading } = result.current;
    await waitForNextUpdate();

    expect(data.length).toBe(0);
    expect(loading).toBe(true);
  });

  test("should return an array of imgs and the loading should be set to false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("One Punch Man")
    );
    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect(data.length).toBe(5);
    expect(loading).toBe(false);
  });
});
