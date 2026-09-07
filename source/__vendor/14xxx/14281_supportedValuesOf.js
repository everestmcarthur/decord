// Module ID: 14281
// Function ID: 14282
// Name: supportedValuesOf
// Dependencies: [14282, 14284, 14286, 14288, 14290, 14292]

// Module 14281 (supportedValuesOf)
import getSupportedCalendars from "getSupportedCalendars" /* 14282 */;
import getSupportedCollations from "getSupportedCollations" /* 14284 */;
import isSupportedCurrency from "isSupportedCurrency" /* 14286 */;
import getSupportedNumberingSystems from "getSupportedNumberingSystems" /* 14288 */;
import getSupportedTimeZones from "getSupportedTimeZones" /* 14290 */;
import getSupportedUnits from "getSupportedUnits" /* 14292 */;

require = arg1;
const dependencyMap = arg6;
arg5.supportedValuesOf = function supportedValuesOf(collation, locale) {
  if ("calendar" === collation) {
    return getSupportedCalendars.getSupportedCalendars(locale);
  } else if ("collation" === collation) {
    return getSupportedCollations.getSupportedCollations(locale);
  } else if ("currency" === collation) {
    return isSupportedCurrency.getSupportedCurrencies(locale);
  } else if ("numberingSystem" === collation) {
    return getSupportedNumberingSystems.getSupportedNumberingSystems(locale);
  } else if ("timeZone" === collation) {
    return getSupportedTimeZones.getSupportedTimeZones(locale);
  } else if ("unit" === collation) {
    return getSupportedUnits.getSupportedUnits(locale);
  } else {
    const _RangeError = RangeError;
    throw RangeError("Invalid key: " + collation);
  }
};
