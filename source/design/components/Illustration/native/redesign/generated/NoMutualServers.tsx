// Module ID: 12608
// Function ID: 12609
// Name: getNoMutualServersSource
// Dependencies: [19, 17, 21, 8233, 12609, 12610, 12611, 4411, 2]
// Exports: NoMutualServers, getNoMutualServersSource, useNoMutualServersSource

// Module 12608 (getNoMutualServersSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 4411 */;
import getIllustrationSource from "getIllustrationSource" /* 8233 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualServers.tsx");

export const getNoMutualServersSource = function getNoMutualServersSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(12609);
    },
    darker() {
      return callback(12610);
    },
    light() {
      return callback(12611);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoMutualServersSource = function useNoMutualServersSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(12609);
    },
    darker() {
      return callback(12610);
    },
    light() {
      return callback(12611);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoMutualServers = function NoMutualServers(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(12609);
    },
    darker() {
      return callback(12610);
    },
    light() {
      return callback(12611);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
