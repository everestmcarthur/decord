// Module ID: 14342
// Function ID: 14343
// Dependencies: [14255, 14343]
// Exports: getSupportedTimeZones

// Module 14342
const require = globalThis.__r;

const require = arg1;
const dependencyMap = arg6;

export const getSupportedTimeZones = function getSupportedTimeZones(locale) {
  _require = locale;
  const timezones = require("module_14343").timezones;
  return timezones.filter((item) => (function isSupported(timeZone, arg1) {
    let str = arg1;
    if (undefined === arg1) {
      str = "en";
    }
    try {
      const obj = { timeZone };
      const memoizedDateTimeFormat = locale(closure_1_1[0]).createMemoizedDateTimeFormat(str, obj);
      return memoizedDateTimeFormat.resolvedOptions().timeZone === timeZone;
    } catch (err) {
      return false;
    }
  })(item, closure_0));
};
