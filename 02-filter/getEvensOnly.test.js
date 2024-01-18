import getEvensOnly from "./getEvensOnly.js";
describe("Given getEvensOnly", () => {
  test("when an array of numbers is given as an argument, then the exected array should be returned ", () => {
    const COUNTERS = [2, 25, 43, 12, 67, 42, 28];
    const EXPECTED_RESULT = [2, 12, 42, 28];

    const evenNumber = getEvensOnly(COUNTERS);

    expect(evenNumber).toBeDefined();
    expect(evenNumber.length).toEqual(4);
    expect(evenNumber).toEqual(EXPECTED_RESULT);
  });
});
