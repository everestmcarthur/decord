// Module ID: 14805
// Function ID: 14806
// Name: getBlockedSource
// Dependencies: [19, 17, 21, 8233, 14806, 14807, 14808, 4411, 2]
// Exports: Blocked, getBlockedSource, useBlockedSource

// Module 14805 (getBlockedSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 4411 */;
import getIllustrationSource from "getIllustrationSource" /* 8233 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export const getBlockedSource = function getBlockedSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(14806);
    },
    darker() {
      return callback(14807);
    },
    light() {
      return callback(14808);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useBlockedSource = function useBlockedSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(14806);
    },
    darker() {
      return callback(14807);
    },
    light() {
      return callback(14808);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Blocked = function Blocked(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(14806);
    },
    darker() {
      return callback(14807);
    },
    light() {
      return callback(14808);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
