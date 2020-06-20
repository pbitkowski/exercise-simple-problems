import startsWithUppercase from "./starts-with-uppercase";

test.each(["Android", "Zordon", "Loki", "Sinus"])(
  "detects that string starts with an uppercase letter",
  (text) => {
    expect(startsWithUppercase(text)).toEqual(true);
  }
);

test.each(["android", "zordon", "loki", "sinus", "tEsT", "123"])(
  "detects that string does not start with an uppercase letter",
  (text) => {
    expect(startsWithUppercase(text)).toEqual(false);
  }
);

test("returns false for empty string", () => {
  expect(startsWithUppercase("")).toEqual(false);
});

test.each([true, null, [], {}, undefined, 1])(
  "throws error for non-string input",
  (nonStringInput) => {
    expect(() => startsWithUppercase(nonStringInput)).toThrowError();
  }
);

test("returns false for unicode characters", () => {
  const omegaCharacter = "\u03A9";
  expect(startsWithUppercase(omegaCharacter)).toEqual(false);
});
