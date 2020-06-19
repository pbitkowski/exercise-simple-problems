import startsWithUppercase from "./starts-with-uppercase";

it.each(["Android", "Zordon", "Loki", "Sinus"])(
  "detects that string starts with an uppercase letter",
  text => {
    expect(startsWithUppercase(text)).toEqual(true);
  }
);

it.each(["android", "zordon", "loki", "sinus", 'tEsT', '123'])(
  "detects that string does not start with an uppercase letter",
  text => {
    expect(startsWithUppercase(text)).toEqual(false);
  }
);

it("returns false for empty string", () => {
  expect(startsWithUppercase("")).toEqual(false);
});

it("throws error for non-string input", () => {
  // @ts-ignore explicit bad input
  expect(() => startsWithUppercase(undefined)).toThrowError();
  // @ts-ignore explicit bad input
  expect(() => startsWithUppercase(true)).toThrowError();
  // @ts-ignore explicit bad input
  expect(() => startsWithUppercase(null)).toThrowError();
  // @ts-ignore explicit bad input
  expect(() => calculateCircleArea([])).toThrowError();
  // @ts-ignore explicit bad input
  expect(() => startsWithUppercase({})).toThrowError();
  // @ts-ignore explicit bad input
  expect(() => startsWithUppercase()).toThrowError();
}); 


it("returns false for unicode characters", () => {
  const omegaCharacter = '\u03A9';
  expect(startsWithUppercase(omegaCharacter)).toEqual(false);
})
