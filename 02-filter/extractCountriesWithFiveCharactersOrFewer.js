/**
 * Given COUNTRIES array, define function 'extractCountriesWithFiveCharactersOrFewer' return a new array that only includes those countries that are 5 characters or fewer in length.
 *
 * expected: [ 'Italy' ]
 */

const COUNTRIES = ["United Kingdom", "Italy", "France", "Portugal", "Greece"];

const extractCountriesWithFiveCharactersOrFewer = function (countries) {
    const countriesFilter = countries.filter((countrie) => {
        return countrie.length <= 5;
    })

    return countriesFilter
}

export default extractCountriesWithFiveCharactersOrFewer