// Module ID: 14303
// Function ID: 14304
// Name: CurrencyDigits
// Dependencies: [14281]
// Exports: CurrencyDigits

// Module 14303 (CurrencyDigits)
import _mod14281 from "module_14281" /* 14281 */;

require = arg1;
const dependencyMap = arg6;

export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod14281.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
