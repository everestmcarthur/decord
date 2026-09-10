// Module ID: 14254
// Function ID: 14255
// Name: CurrencyDigits
// Dependencies: [14232]
// Exports: CurrencyDigits

// Module 14254 (CurrencyDigits)
import _mod14232 from "module_14232" /* 14232 */;

require = arg1;
const dependencyMap = arg6;

export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod14232.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
