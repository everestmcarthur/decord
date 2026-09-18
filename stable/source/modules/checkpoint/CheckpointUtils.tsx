// Module ID: 8144
// Function ID: 8145
// Name: CheckpointUtils
// Dependencies: [4589, 7642, 1114, 8145, 8146, 8147, 8148, 8149, 8150, 8151, 8152, 8153, 8154, 2]
// Exports: getCardAssetUrl, getCheckpointPowerBarUnits, getVoiceDurationString

// Module 8144 (CheckpointUtils)
import TimeUtils from "TimeUtils" /* 4589 */;
import notification_center_getTimestampString from "notification_center/getTimestampString" /* 7642 */;
import _modDef8145 from "module_8145" /* 8145 */;
import _modDef8146 from "module_8146" /* 8146 */;
import _modDef8147 from "module_8147" /* 8147 */;
import _modDef8148 from "module_8148" /* 8148 */;
import _modDef8149 from "module_8149" /* 8149 */;
import _modDef8150 from "module_8150" /* 8150 */;
import _modDef8151 from "module_8151" /* 8151 */;
import _modDef8152 from "module_8152" /* 8152 */;
import _modDef8153 from "module_8153" /* 8153 */;
import _modDef8154 from "module_8154" /* 8154 */;
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
    if (unit === tmp(4589).TimeUnits.HOURS) {
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
    return _modDef8145;
  } else if (1 === cardId) {
    return _modDef8146;
  } else if (2 === cardId) {
    return _modDef8147;
  } else if (3 === cardId) {
    return _modDef8148;
  } else if (4 === cardId) {
    return _modDef8149;
  } else if (5 === cardId) {
    return _modDef8150;
  } else if (6 === cardId) {
    return _modDef8151;
  } else if (7 === cardId) {
    return _modDef8152;
  } else if (8 === cardId) {
    return _modDef8153;
  } else {
    return _modDef8154;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(arg0) {
  return Math.min(Math.max(Math.round(arg0 / 10), 1), 9);
};
