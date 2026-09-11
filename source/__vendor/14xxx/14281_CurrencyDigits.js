// Module ID: 14281
// Function ID: 14282
// Name: CurrencyDigits
// Dependencies: [14259]
// Exports: CurrencyDigits

// Module 14281 (CurrencyDigits)
import _mod14259 from "module_14259" /* 14259 */;

require = arg1;
const dependencyMap = arg6;

export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod14259.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
