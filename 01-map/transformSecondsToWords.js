/**
 * Given SECONDS array, define function 'transformSecondsToWords' to return an array of strings from numbers
 *
 * expected: ["2", "5", "100"]
 */

const SECONDS = [2, 5, 100];

const transformSecondsToWords = function (seconds) {
  const newWord = seconds.map((second) => {
    return second.toString();
  });

  return newWord;
};

export default transformSecondsToWords;
