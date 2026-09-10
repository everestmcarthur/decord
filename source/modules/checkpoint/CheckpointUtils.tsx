// Module ID: 8206
// Function ID: 8207
// Name: CheckpointUtils
// Dependencies: [4634, 7693, 1114, 8207, 8208, 8209, 8210, 8211, 8212, 8213, 8214, 8215, 8216, 2]
// Exports: getCardAssetUrl, getCheckpointPowerBarUnits, getVoiceDurationString

// Module 8206 (CheckpointUtils)
import TimeUtils from "TimeUtils" /* 4634 */;
import notification_center_getTimestampString from "notification_center/getTimestampString" /* 7693 */;
import _modDef8207 from "module_8207" /* 8207 */;
import _modDef8208 from "module_8208" /* 8208 */;
import _modDef8209 from "module_8209" /* 8209 */;
import _modDef8210 from "module_8210" /* 8210 */;
import _modDef8211 from "module_8211" /* 8211 */;
import _modDef8212 from "module_8212" /* 8212 */;
import _modDef8213 from "module_8213" /* 8213 */;
import _modDef8214 from "module_8214" /* 8214 */;
import _modDef8215 from "module_8215" /* 8215 */;
import _modDef8216 from "module_8216" /* 8216 */;
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
    if (unit === tmp(4634).TimeUnits.HOURS) {
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
    return _modDef8207;
  } else if (1 === cardId) {
    return _modDef8208;
  } else if (2 === cardId) {
    return _modDef8209;
  } else if (3 === cardId) {
    return _modDef8210;
  } else if (4 === cardId) {
    return _modDef8211;
  } else if (5 === cardId) {
    return _modDef8212;
  } else if (6 === cardId) {
    return _modDef8213;
  } else if (7 === cardId) {
    return _modDef8214;
  } else if (8 === cardId) {
    return _modDef8215;
  } else {
    return _modDef8216;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(arg0) {
  return Math.min(Math.max(Math.round(arg0 / 10), 1), 9);
};
