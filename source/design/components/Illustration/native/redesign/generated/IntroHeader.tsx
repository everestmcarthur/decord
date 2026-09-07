// Module ID: 17660
// Function ID: 17661
// Name: getIntroHeaderSource
// Dependencies: [19, 17, 21, 8233, 17661, 17662, 17663, 4411, 2]
// Exports: IntroHeader, getIntroHeaderSource, useIntroHeaderSource

// Module 17660 (getIntroHeaderSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 4411 */;
import getIllustrationSource from "getIllustrationSource" /* 8233 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export const getIntroHeaderSource = function getIntroHeaderSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(17661);
    },
    darker() {
      return callback(17662);
    },
    light() {
      return callback(17663);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useIntroHeaderSource = function useIntroHeaderSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(17661);
    },
    darker() {
      return callback(17662);
    },
    light() {
      return callback(17663);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const IntroHeader = function IntroHeader(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(17661);
    },
    darker() {
      return callback(17662);
    },
    light() {
      return callback(17663);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
