// Module ID: 17559
// Function ID: 17560
// Name: getEmptyServerSettingsAuditLogSource
// Dependencies: [19, 17, 21, 8233, 17560, 17561, 17562, 4411, 2]
// Exports: EmptyServerSettingsAuditLog, getEmptyServerSettingsAuditLogSource, useEmptyServerSettingsAuditLogSource

// Module 17559 (getEmptyServerSettingsAuditLogSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 4411 */;
import getIllustrationSource from "getIllustrationSource" /* 8233 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsAuditLog.tsx");

export const getEmptyServerSettingsAuditLogSource = function getEmptyServerSettingsAuditLogSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(17560);
    },
    darker() {
      return callback(17561);
    },
    light() {
      return callback(17562);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useEmptyServerSettingsAuditLogSource = function useEmptyServerSettingsAuditLogSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(17560);
    },
    darker() {
      return callback(17561);
    },
    light() {
      return callback(17562);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const EmptyServerSettingsAuditLog = function EmptyServerSettingsAuditLog(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(17560);
    },
    darker() {
      return callback(17561);
    },
    light() {
      return callback(17562);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
