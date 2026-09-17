// Module ID: 8291
// Function ID: 8292
// Name: CheckpointUtils
// Dependencies: [4669, 7756, 1115, 8292, 8293, 8294, 8295, 8296, 8297, 8298, 8299, 8300, 8301, 2]
// Exports: getCardAssetUrl, getCheckpointPowerBarUnits, getVoiceDurationString

// Module 8291 (CheckpointUtils)
import TimeUtils from "TimeUtils" /* 4669 */;
import notification_center_getTimestampString from "notification_center/getTimestampString" /* 7756 */;
import _modDef8292 from "module_8292" /* 8292 */;
import _modDef8293 from "module_8293" /* 8293 */;
import _modDef8294 from "module_8294" /* 8294 */;
import _modDef8295 from "module_8295" /* 8295 */;
import _modDef8296 from "module_8296" /* 8296 */;
import _modDef8297 from "module_8297" /* 8297 */;
import _modDef8298 from "module_8298" /* 8298 */;
import _modDef8299 from "module_8299" /* 8299 */;
import _modDef8300 from "module_8300" /* 8300 */;
import _modDef8301 from "module_8301" /* 8301 */;
import size from "module_2" /* 2 */;

const items = [TimeUtils.TimeUnits.HOURS, TimeUtils.TimeUnits.MINUTES];
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointUtils.tsx");

export const getVoiceDurationString = function getVoiceDurationString(totalVoiceMinutes) {
  const timeAndUnit = TimeUtils.getTimeAndUnit(totalVoiceMinutes, items);
  ({ time, unit } = timeAndUnit);
  const time2 = notification_center_getTimestampString.getAbbreviatedFormatter();
  if (null == time) {
    const intl3 = tmp(1115).intl;
    return intl3.formatToPlainString(time2.minutes, { minutes: 0 });
  } else {
    const _Math = Math;
    const rounded = Math.round(time);
    if (unit === tmp(4669).TimeUnits.HOURS) {
      const intl2 = tmp(1115).intl;
      const obj3 = { hours: rounded };
      let formatToPlainStringResult = intl2.formatToPlainString(time2.hours, obj3);
    } else {
      const intl = tmp(1115).intl;
      const obj4 = { minutes: rounded };
      formatToPlainStringResult = intl.formatToPlainString(time2.minutes, obj4);
    }
    return formatToPlainStringResult;
  }
};
export const getCardAssetUrl = function getCardAssetUrl(cardId) {
  if (0 === cardId) {
    return _modDef8292;
  } else if (1 === cardId) {
    return _modDef8293;
  } else if (2 === cardId) {
    return _modDef8294;
  } else if (3 === cardId) {
    return _modDef8295;
  } else if (4 === cardId) {
    return _modDef8296;
  } else if (5 === cardId) {
    return _modDef8297;
  } else if (6 === cardId) {
    return _modDef8298;
  } else if (7 === cardId) {
    return _modDef8299;
  } else if (8 === cardId) {
    return _modDef8300;
  } else {
    return _modDef8301;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(arg0) {
  return Math.min(Math.max(Math.round(arg0 / 10), 1), 9);
};
