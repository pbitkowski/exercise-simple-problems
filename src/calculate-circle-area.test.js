import calculateCircleArea from "./calculate-circle-area";

test.each([
  { radius: 0, result: 0 },
  { radius: 1, result: Math.PI },
  { radius: 100, result: 10000 * Math.PI },
])("calculates proper value for radius", ({ radius, result }) => {
  expect(calculateCircleArea(radius)).toEqual(result);
});

test("throws error for radius below 0", () => {
  expect(() => calculateCircleArea(-10)).toThrowError();
});

test.each([true, null, [], {}, undefined, ""])(
  "throws error for not number radius",
  (badInput) => {
    expect(() => calculateCircleArea(badInput)).toThrowError();
  }
);
