// Module ID: 11801
// Function ID: 11802
// Name: getInvalidLinkSource
// Dependencies: [19, 17, 21, 8233, 11459, 11802, 11460, 4411, 2]
// Exports: InvalidLink, getInvalidLinkSource, useInvalidLinkSource

// Module 11801 (getInvalidLinkSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 4411 */;
import getIllustrationSource from "getIllustrationSource" /* 8233 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/InvalidLink.tsx");

export const getInvalidLinkSource = function getInvalidLinkSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(11459);
    },
    darker() {
      return callback(11802);
    },
    light() {
      return callback(11460);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useInvalidLinkSource = function useInvalidLinkSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(11459);
    },
    darker() {
      return callback(11802);
    },
    light() {
      return callback(11460);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const InvalidLink = function InvalidLink(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(11459);
    },
    darker() {
      return callback(11802);
    },
    light() {
      return callback(11460);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
