// Module ID: 14340
// Function ID: 14341
// Name: SetNumberFormatUnitOptions
// Dependencies: [14299, 14294, 14304, 14305]
// Exports: SetNumberFormatUnitOptions

// Module 14340 (SetNumberFormatUnitOptions)
import _mod14294 from "module_14294" /* 14294 */;
import GetOption from "GetOption" /* 14299 */;

require = arg1;
const dependencyMap = arg6;

export const SetNumberFormatUnitOptions = function SetNumberFormatUnitOptions(internalSlots, result1) {
  let obj = result1;
  if (undefined === result1) {
    const _Object = Object;
    obj = Object.create(null);
  }
  const GetOptionResult = GetOption.GetOption(obj, "style", "string", ["decimal", "percent", "currency", "unit"], "decimal");
  internalSlots.style = GetOptionResult;
  const str = GetOption.GetOption(obj, "currency", "string", undefined, undefined);
  let result = undefined === str;
  if (!result) {
    result = tmp4(14304).IsWellFormedCurrencyCode(str);
  }
  _mod14294.invariant(result, "Malformed currency code", RangeError);
  let tmp10 = "currency" !== GetOptionResult;
  if (!tmp10) {
    tmp10 = undefined !== str;
  }
  _mod14294.invariant(tmp10, "currency cannot be undefined", TypeError);
  const GetOptionResult1 = GetOption.GetOption(obj, "currencyDisplay", "string", ["code", "symbol", "narrowSymbol", "name"], "symbol");
  const GetOptionResult3 = GetOption.GetOption(obj, "unit", "string", undefined, undefined);
  result1 = undefined === GetOptionResult3;
  if (!result1) {
    result1 = tmp4(14305).IsWellFormedUnitIdentifier(GetOptionResult3);
  }
  _mod14294.invariant(result1, "Invalid unit argument for Intl.NumberFormat()", RangeError);
  let tmp17 = "unit" !== GetOptionResult;
  if (!tmp17) {
    tmp17 = undefined !== GetOptionResult3;
  }
  _mod14294.invariant(tmp17, "unit cannot be undefined", TypeError);
  const GetOptionResult2 = GetOption.GetOption(obj, "currencySign", "string", ["standard", "accounting"], "standard");
  if ("currency" === GetOptionResult) {
    internalSlots.currency = str.toUpperCase();
    internalSlots.currencyDisplay = GetOptionResult1;
    internalSlots.currencySign = GetOptionResult2;
  }
  if ("unit" === GetOptionResult) {
    internalSlots.unit = GetOptionResult3;
    internalSlots.unitDisplay = GetOptionResult4;
  }
};
