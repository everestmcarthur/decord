// Module ID: 14342
// Function ID: 14343
// Name: CurrencyDigits
// Dependencies: [14320]
// Exports: CurrencyDigits

// Module 14342 (CurrencyDigits)
import _mod14320 from "module_14320" /* 14320 */;

require = arg1;
const dependencyMap = arg6;

export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod14320.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
