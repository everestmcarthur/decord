// Module ID: 14229
// Function ID: 14230
// Name: __exportStarResult15
// Dependencies: [14207]

// Module 14229 (__exportStarResult15)
import __exportStarResult32 from "__exportStarResult32" /* 14207 */;

require = arg1;
const dependencyMap = arg6;
arg5.CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (__exportStarResult32.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
