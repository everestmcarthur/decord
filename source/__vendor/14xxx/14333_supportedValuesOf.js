// Module ID: 14333
// Function ID: 14334
// Name: supportedValuesOf
// Dependencies: [14334, 14336, 14338, 14340, 14342, 14344]
// Exports: supportedValuesOf

// Module 14333 (supportedValuesOf)
import _mod14334 from "module_14334" /* 14334 */;
import collations from "collations" /* 14336 */;
import _mod14338 from "module_14338" /* 14338 */;
import _mod14340 from "module_14340" /* 14340 */;
import _mod14342 from "module_14342" /* 14342 */;
import _mod14344 from "module_14344" /* 14344 */;

require = arg1;
const dependencyMap = arg6;

export const supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return _mod14334.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return collations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return _mod14338.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return _mod14340.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return _mod14342.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return _mod14344.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
