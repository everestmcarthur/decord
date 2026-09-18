// Module ID: 14445
// Function ID: 14446
// Name: CurrencyDigits
// Dependencies: [14423]
// Exports: CurrencyDigits

// Module 14445 (CurrencyDigits)
import _mod14423 from "module_14423" /* 14423 */;

require = arg1;
const dependencyMap = arg6;

export const CurrencyDigits = function CurrencyDigits(currency, currencyDigitsData) {
  currencyDigitsData = currencyDigitsData.currencyDigitsData;
  let num = 2;
  if (_mod14423.HasOwnProperty(currencyDigitsData, currency)) {
    num = currencyDigitsData[currency];
  }
  return num;
};
