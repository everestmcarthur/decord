// Module ID: 14255
// Function ID: 14256
// Name: __exportStarResult27
// Dependencies: [14214, 14209, 14219, 14220]

// Module 14255 (__exportStarResult27)
import getMultiInternalSlots from "getMultiInternalSlots" /* 14209 */;
import __exportStarResult4 from "__exportStarResult4" /* 14214 */;

require = arg1;
const dependencyMap = arg6;
arg5.SetNumberFormatUnitOptions = function SetNumberFormatUnitOptions(internalSlots, result1) {
  let obj = result1;
  if (undefined === result1) {
    const _Object = Object;
    obj = Object.create(null);
  }
  const GetOptionResult = __exportStarResult4.GetOption(obj, "style", "string", ["decimal", "percent", "currency", "unit"], "decimal");
  internalSlots.style = GetOptionResult;
  const str = __exportStarResult4.GetOption(obj, "currency", "string", undefined, undefined);
  let result = undefined === str;
  if (!result) {
    result = tmp4(14219).IsWellFormedCurrencyCode(str);
  }
  getMultiInternalSlots.invariant(result, "Malformed currency code", RangeError);
  let tmp10 = "currency" !== GetOptionResult;
  if (!tmp10) {
    tmp10 = undefined !== str;
  }
  getMultiInternalSlots.invariant(tmp10, "currency cannot be undefined", TypeError);
  const GetOptionResult1 = __exportStarResult4.GetOption(obj, "currencyDisplay", "string", ["code", "symbol", "narrowSymbol", "name"], "symbol");
  const GetOptionResult3 = __exportStarResult4.GetOption(obj, "unit", "string", undefined, undefined);
  result1 = undefined === GetOptionResult3;
  if (!result1) {
    result1 = tmp4(14220).IsWellFormedUnitIdentifier(GetOptionResult3);
  }
  getMultiInternalSlots.invariant(result1, "Invalid unit argument for Intl.NumberFormat()", RangeError);
  let tmp17 = "unit" !== GetOptionResult;
  if (!tmp17) {
    tmp17 = undefined !== GetOptionResult3;
  }
  getMultiInternalSlots.invariant(tmp17, "unit cannot be undefined", TypeError);
  const GetOptionResult2 = __exportStarResult4.GetOption(obj, "currencySign", "string", ["standard", "accounting"], "standard");
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
