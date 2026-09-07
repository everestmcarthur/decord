// Module ID: 17572
// Function ID: 17573
// Name: getEmptyServerSettingsEmojiSource
// Dependencies: [19, 17, 21, 8233, 17573, 17574, 17575, 4411, 2]
// Exports: EmptyServerSettingsEmoji, getEmptyServerSettingsEmojiSource, useEmptyServerSettingsEmojiSource

// Module 17572 (getEmptyServerSettingsEmojiSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 4411 */;
import getIllustrationSource from "getIllustrationSource" /* 8233 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsEmoji.tsx");

export const getEmptyServerSettingsEmojiSource = function getEmptyServerSettingsEmojiSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(17573);
    },
    darker() {
      return callback(17574);
    },
    light() {
      return callback(17575);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useEmptyServerSettingsEmojiSource = function useEmptyServerSettingsEmojiSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(17573);
    },
    darker() {
      return callback(17574);
    },
    light() {
      return callback(17575);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const EmptyServerSettingsEmoji = function EmptyServerSettingsEmoji(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(17573);
    },
    darker() {
      return callback(17574);
    },
    light() {
      return callback(17575);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
