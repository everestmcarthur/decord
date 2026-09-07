// Module ID: 9603
// Function ID: 9604
// Name: getStreamEndedSource
// Dependencies: [19, 17, 21, 8233, 9604, 9605, 4411, 2]
// Exports: StreamEnded, getStreamEndedSource, useStreamEndedSource

// Module 9603 (getStreamEndedSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 4411 */;
import getIllustrationSource from "getIllustrationSource" /* 8233 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamEnded.tsx");

export const getStreamEndedSource = function getStreamEndedSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(9604);
    },
    darker() {
      return callback(9605);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useStreamEndedSource = function useStreamEndedSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(9604);
    },
    darker() {
      return callback(9605);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const StreamEnded = function StreamEnded(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(9604);
    },
    darker() {
      return callback(9605);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
