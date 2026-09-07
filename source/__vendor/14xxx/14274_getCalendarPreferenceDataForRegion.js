// Module ID: 14274
// Function ID: 14275
// Name: getCalendarPreferenceDataForRegion
// Dependencies: [14275, 14276, 1162, 14277, 14278]

// Module 14274 (getCalendarPreferenceDataForRegion)
import e from "e" /* 1162 */;
import _mod14275 from "module_14275" /* 14275 */;
import _mod14276 from "module_14276" /* 14276 */;
import _mod14277 from "module_14277" /* 14277 */;
import _mod14278 from "module_14278" /* 14278 */;

require = arg1;
const dependencyMap = arg6;
arg5.getCalendarPreferenceDataForRegion = function getCalendarPreferenceDataForRegion(region) {
  let str = null;
  if (region) {
    str = region.toUpperCase();
  }
  if (!str) {
    str = "";
  }
  return _mod14275.calendars[str] || _mod14275.calendars["001"].map((arg0) => {
    let str = "gregory";
    if ("gregorian" !== arg0) {
      let str2 = "islamicc";
      if ("islamic-civil" !== arg0) {
        str2 = arg0;
      }
      str = str2;
    }
    return str;
  });
};
arg5.getHourCyclesPreferenceDataForLocaleOrRegion = function getHourCyclesPreferenceDataForLocaleOrRegion(locale, region) {
  const formatted = locale.toLowerCase();
  let str = "";
  if (region) {
    str = region.toUpperCase();
  }
  let v001 = _mod14276.hourCycles[formatted] || tmp2(14276).hourCycles[str];
  if (!v001) {
    const concat = "".concat;
    v001 = tmp2(14276).hourCycles["".concat("", formatted, "-001")];
  }
  if (!v001) {
    v001 = tmp2(14276).hourCycles["001"];
  }
  return e.__spreadArray([], v001, true);
};
arg5.getTimeZonePreferenceForRegion = function getTimeZonePreferenceForRegion(region) {
  const formatted = region.toLowerCase();
  const items = [];
  if (_mod14277.timezones[formatted]) {
    return tmp2(1162).__spreadArray(items, tmp2(14277).timezones[formatted], true);
  } else {
    return items;
  }
};
arg5.getWeekDataForRegion = function getWeekDataForRegion(region) {
  let str = "";
  if (region) {
    str = region.toUpperCase();
  }
  if (!str) {
    str = "001";
  }
  return _mod14278.weekData[str] || _mod14278.weekData["001"];
};
