import extractCountriesWithFiveCharactersOrFewer from "./extractCountriesWithFiveCharactersOrFewer.js";
describe("Given extractCountriesWithFiveCharactersOrFewer", () => {
  test("when an array of strings is given as an argument, then the exected array should be returned ", () => {
    const COUNTRIES = [
      "United Kingdom",
      "Italy",
      "France",
      "Portugal",
      "Greece",
    ];
    const EXPECTED_RESULT = ["Italy"];

    const shortWord = extractCountriesWithFiveCharactersOrFewer(COUNTRIES);

    expect(shortWord).toBeDefined();
    expect(shortWord.length).toEqual(1);
    expect(shortWord).toEqual(EXPECTED_RESULT);
  });
});
