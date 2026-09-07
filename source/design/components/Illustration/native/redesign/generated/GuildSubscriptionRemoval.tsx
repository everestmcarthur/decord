// Module ID: 13621
// Function ID: 13622
// Name: getGuildSubscriptionRemovalSource
// Dependencies: [19, 17, 21, 8233, 13622, 13623, 13624, 4411, 2]
// Exports: GuildSubscriptionRemoval, getGuildSubscriptionRemovalSource, useGuildSubscriptionRemovalSource

// Module 13621 (getGuildSubscriptionRemovalSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 4411 */;
import getIllustrationSource from "getIllustrationSource" /* 8233 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionRemoval.tsx");

export const getGuildSubscriptionRemovalSource = function getGuildSubscriptionRemovalSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(13622);
    },
    darker() {
      return callback(13623);
    },
    light() {
      return callback(13624);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useGuildSubscriptionRemovalSource = function useGuildSubscriptionRemovalSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(13622);
    },
    darker() {
      return callback(13623);
    },
    light() {
      return callback(13624);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const GuildSubscriptionRemoval = function GuildSubscriptionRemoval(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(13622);
    },
    darker() {
      return callback(13623);
    },
    light() {
      return callback(13624);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
