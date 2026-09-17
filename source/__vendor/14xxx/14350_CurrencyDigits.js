// Module ID: 14350
// Function ID: 14351
// Name: CurrencyDigits
// Dependencies: [14328]
// Exports: CurrencyDigits

// Module 14350 (CurrencyDigits)
import _mod14328 from "module_14328" /* 14328 */;

require = arg1;
const dependencyMap = arg6;

export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod14328.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
