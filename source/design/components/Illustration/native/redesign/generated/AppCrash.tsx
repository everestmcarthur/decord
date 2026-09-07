// Module ID: 9854
// Function ID: 9855
// Name: getAppCrashSource
// Dependencies: [19, 17, 21, 8233, 9855, 9856, 9857, 4411, 2]
// Exports: AppCrash, getAppCrashSource, useAppCrashSource

// Module 9854 (getAppCrashSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 4411 */;
import getIllustrationSource from "getIllustrationSource" /* 8233 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export const getAppCrashSource = function getAppCrashSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(9855);
    },
    darker() {
      return callback(9856);
    },
    light() {
      return callback(9857);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useAppCrashSource = function useAppCrashSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(9855);
    },
    darker() {
      return callback(9856);
    },
    light() {
      return callback(9857);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const AppCrash = function AppCrash(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(9855);
    },
    darker() {
      return callback(9856);
    },
    light() {
      return callback(9857);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
