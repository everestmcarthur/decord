// Module ID: 11647
// Function ID: 11648
// Name: getFeedbackModalHappyDesaturatedSource
// Dependencies: [19, 17, 21, 8233, 11648, 11649, 11650, 4411, 2]
// Exports: FeedbackModalHappyDesaturated, getFeedbackModalHappyDesaturatedSource, useFeedbackModalHappyDesaturatedSource

// Module 11647 (getFeedbackModalHappyDesaturatedSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 4411 */;
import getIllustrationSource from "getIllustrationSource" /* 8233 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalHappyDesaturated.tsx");

export const getFeedbackModalHappyDesaturatedSource = function getFeedbackModalHappyDesaturatedSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(11648);
    },
    darker() {
      return callback(11649);
    },
    light() {
      return callback(11650);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useFeedbackModalHappyDesaturatedSource = function useFeedbackModalHappyDesaturatedSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(11648);
    },
    darker() {
      return callback(11649);
    },
    light() {
      return callback(11650);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const FeedbackModalHappyDesaturated = function FeedbackModalHappyDesaturated(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(11648);
    },
    darker() {
      return callback(11649);
    },
    light() {
      return callback(11650);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
