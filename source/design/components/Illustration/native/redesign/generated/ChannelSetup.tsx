// Module ID: 17672
// Function ID: 17673
// Name: getChannelSetupSource
// Dependencies: [19, 17, 21, 8233, 17673, 17674, 17675, 4411, 2]
// Exports: ChannelSetup, getChannelSetupSource, useChannelSetupSource

// Module 17672 (getChannelSetupSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 4411 */;
import getIllustrationSource from "getIllustrationSource" /* 8233 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export const getChannelSetupSource = function getChannelSetupSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(17673);
    },
    darker() {
      return callback(17674);
    },
    light() {
      return callback(17675);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useChannelSetupSource = function useChannelSetupSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(17673);
    },
    darker() {
      return callback(17674);
    },
    light() {
      return callback(17675);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const ChannelSetup = function ChannelSetup(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(17673);
    },
    darker() {
      return callback(17674);
    },
    light() {
      return callback(17675);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
