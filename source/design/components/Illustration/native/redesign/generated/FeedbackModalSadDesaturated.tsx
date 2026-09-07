// Module ID: 11637
// Function ID: 11638
// Name: getFeedbackModalSadDesaturatedSource
// Dependencies: [19, 17, 21, 8233, 11638, 11639, 11640, 4411, 2]
// Exports: FeedbackModalSadDesaturated, getFeedbackModalSadDesaturatedSource, useFeedbackModalSadDesaturatedSource

// Module 11637 (getFeedbackModalSadDesaturatedSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 4411 */;
import getIllustrationSource from "getIllustrationSource" /* 8233 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalSadDesaturated.tsx");

export const getFeedbackModalSadDesaturatedSource = function getFeedbackModalSadDesaturatedSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(11638);
    },
    darker() {
      return callback(11639);
    },
    light() {
      return callback(11640);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useFeedbackModalSadDesaturatedSource = function useFeedbackModalSadDesaturatedSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(11638);
    },
    darker() {
      return callback(11639);
    },
    light() {
      return callback(11640);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const FeedbackModalSadDesaturated = function FeedbackModalSadDesaturated(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(11638);
    },
    darker() {
      return callback(11639);
    },
    light() {
      return callback(11640);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
