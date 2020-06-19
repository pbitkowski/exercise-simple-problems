import calculateCircleArea from "./calculate-circle-area";

describe("calculateCircleArea for radius", () => {
  test.each([
    { radius: 0, result: 0 },
    { radius: 1, result: Math.PI },
    { radius: 100, result: 10000 * Math.PI }
  ])("calculates proper value for radius", ({ radius, result }) => {
    expect(calculateCircleArea(radius)).toEqual(result);
  });

  test("throws error for radius below 0", () => {
    expect(() => calculateCircleArea(-10)).toThrowError();
  });

  test("throws error for not number radius", () => {
    // @ts-ignore explicit bad input
    expect(() => calculateCircleArea(undefined)).toThrowError();
    // @ts-ignore explicit bad input
    expect(() => calculateCircleArea(true)).toThrowError();
    // @ts-ignore explicit bad input
    expect(() => calculateCircleArea(null)).toThrowError();
    // @ts-ignore explicit bad input
    expect(() => calculateCircleArea([])).toThrowError();
    // @ts-ignore explicit bad input
    expect(() => calculateCircleArea({})).toThrowError();
    // @ts-ignore explicit bad input
    expect(() => calculateCircleArea()).toThrowError();
  });
});
