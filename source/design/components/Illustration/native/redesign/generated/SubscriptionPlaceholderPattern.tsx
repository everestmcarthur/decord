// Module ID: 13507
// Function ID: 13508
// Name: getSubscriptionPlaceholderPatternSource
// Dependencies: [19, 17, 21, 8233, 13508, 13509, 13510, 4411, 2]
// Exports: SubscriptionPlaceholderPattern, getSubscriptionPlaceholderPatternSource, useSubscriptionPlaceholderPatternSource

// Module 13507 (getSubscriptionPlaceholderPatternSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 4411 */;
import getIllustrationSource from "getIllustrationSource" /* 8233 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/SubscriptionPlaceholderPattern.tsx");

export const getSubscriptionPlaceholderPatternSource = function getSubscriptionPlaceholderPatternSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(13508);
    },
    darker() {
      return callback(13509);
    },
    light() {
      return callback(13510);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useSubscriptionPlaceholderPatternSource = function useSubscriptionPlaceholderPatternSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(13508);
    },
    darker() {
      return callback(13509);
    },
    light() {
      return callback(13510);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const SubscriptionPlaceholderPattern = function SubscriptionPlaceholderPattern(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(13508);
    },
    darker() {
      return callback(13509);
    },
    light() {
      return callback(13510);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
