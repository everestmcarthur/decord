// Module ID: 8169
// Function ID: 8170
// Name: CheckpointUtils
// Dependencies: [4603, 7656, 1114, 8170, 8171, 8172, 8173, 8174, 8175, 8176, 8177, 8178, 8179, 2]
// Exports: getCardAssetUrl, getCheckpointPowerBarUnits, getVoiceDurationString

// Module 8169 (CheckpointUtils)
import TimeUtils from "TimeUtils" /* 4603 */;
import notification_center_getTimestampString from "notification_center/getTimestampString" /* 7656 */;
import _modDef8170 from "module_8170" /* 8170 */;
import _modDef8171 from "module_8171" /* 8171 */;
import _modDef8172 from "module_8172" /* 8172 */;
import _modDef8173 from "module_8173" /* 8173 */;
import _modDef8174 from "module_8174" /* 8174 */;
import _modDef8175 from "module_8175" /* 8175 */;
import _modDef8176 from "module_8176" /* 8176 */;
import _modDef8177 from "module_8177" /* 8177 */;
import _modDef8178 from "module_8178" /* 8178 */;
import _modDef8179 from "module_8179" /* 8179 */;
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
    if (unit === tmp(4603).TimeUnits.HOURS) {
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
    return _modDef8170;
  } else if (1 === cardId) {
    return _modDef8171;
  } else if (2 === cardId) {
    return _modDef8172;
  } else if (3 === cardId) {
    return _modDef8173;
  } else if (4 === cardId) {
    return _modDef8174;
  } else if (5 === cardId) {
    return _modDef8175;
  } else if (6 === cardId) {
    return _modDef8176;
  } else if (7 === cardId) {
    return _modDef8177;
  } else if (8 === cardId) {
    return _modDef8178;
  } else {
    return _modDef8179;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(arg0) {
  return Math.min(Math.max(Math.round(arg0 / 10), 1), 9);
};
