import transformSecondsToWords from "./transformSecondsToWords";
describe("Given feedMonkeys", () => {
  test("when [2, 5, 100] is provided as argument Then exècted array should be returned ", () => {
    const SECONDS = [2, 5, 100];
    const EXPECTED_RESULT = ["2", "5", "100"];

    const newWord = transformSecondsToWords(SECONDS);

    expect(newWord).toBeDefined();
    expect(newWord.length).toBe(3);
    expect(newWord).toEqual(EXPECTED_RESULT);
  });
});
