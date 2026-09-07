// Module ID: 13523
// Function ID: 13524
// Name: getTopPatternSource
// Dependencies: [19, 17, 21, 8233, 13524, 13525, 13526, 4411, 2]
// Exports: TopPattern, getTopPatternSource, useTopPatternSource

// Module 13523 (getTopPatternSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 4411 */;
import getIllustrationSource from "getIllustrationSource" /* 8233 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/TopPattern.tsx");

export const getTopPatternSource = function getTopPatternSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(13524);
    },
    darker() {
      return callback(13525);
    },
    light() {
      return callback(13526);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useTopPatternSource = function useTopPatternSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(13524);
    },
    darker() {
      return callback(13525);
    },
    light() {
      return callback(13526);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const TopPattern = function TopPattern(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(13524);
    },
    darker() {
      return callback(13525);
    },
    light() {
      return callback(13526);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
