// Module ID: 8229
// Function ID: 8230
// Name: CheckpointUtils
// Dependencies: [4636, 7715, 1114, 8230, 8231, 8232, 8233, 8234, 8235, 8236, 8237, 8238, 8239, 2]
// Exports: getCardAssetUrl, getCheckpointPowerBarUnits, getVoiceDurationString

// Module 8229 (CheckpointUtils)
import TimeUtils from "TimeUtils" /* 4636 */;
import notification_center_getTimestampString from "notification_center/getTimestampString" /* 7715 */;
import _modDef8230 from "module_8230" /* 8230 */;
import _modDef8231 from "module_8231" /* 8231 */;
import _modDef8232 from "module_8232" /* 8232 */;
import _modDef8233 from "module_8233" /* 8233 */;
import _modDef8234 from "module_8234" /* 8234 */;
import _modDef8235 from "module_8235" /* 8235 */;
import _modDef8236 from "module_8236" /* 8236 */;
import _modDef8237 from "module_8237" /* 8237 */;
import _modDef8238 from "module_8238" /* 8238 */;
import _modDef8239 from "module_8239" /* 8239 */;
import size from "module_2" /* 2 */;

const items = [TimeUtils.TimeUnits.HOURS, TimeUtils.TimeUnits.MINUTES];
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointUtils.tsx");

export const getVoiceDurationString = function getVoiceDurationString(totalVoiceMinutes) {
  const timeAndUnit = TimeUtils.getTimeAndUnit(totalVoiceMinutes, items);
  ({ time, unit } = timeAndUnit);
  const time2 = notification_center_getTimestampString.getAbbreviatedFormatter();
  if (null == time) {
    const intl3 = tmp(1114).intl;
    return intl3.formatToPlainString(time2.minutes, { minutes: 0 });
  } else {
    const _Math = Math;
    const rounded = Math.round(time);
    if (unit === tmp(4636).TimeUnits.HOURS) {
      const intl2 = tmp(1114).intl;
      const obj3 = { hours: rounded };
      let formatToPlainStringResult = intl2.formatToPlainString(time2.hours, obj3);
    } else {
      const intl = tmp(1114).intl;
      const obj4 = { minutes: rounded };
      formatToPlainStringResult = intl.formatToPlainString(time2.minutes, obj4);
    }
    return formatToPlainStringResult;
  }
};
export const getCardAssetUrl = function getCardAssetUrl(cardId) {
  if (0 === cardId) {
    return _modDef8230;
  } else if (1 === cardId) {
    return _modDef8231;
  } else if (2 === cardId) {
    return _modDef8232;
  } else if (3 === cardId) {
    return _modDef8233;
  } else if (4 === cardId) {
    return _modDef8234;
  } else if (5 === cardId) {
    return _modDef8235;
  } else if (6 === cardId) {
    return _modDef8236;
  } else if (7 === cardId) {
    return _modDef8237;
  } else if (8 === cardId) {
    return _modDef8238;
  } else {
    return _modDef8239;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(arg0) {
  return Math.min(Math.max(Math.round(arg0 / 10), 1), 9);
};
