// Module ID: 12614
// Function ID: 12615
// Name: getNoMutualFriendsSource
// Dependencies: [19, 17, 21, 8233, 12615, 12616, 12617, 4411, 2]
// Exports: NoMutualFriends, getNoMutualFriendsSource, useNoMutualFriendsSource

// Module 12614 (getNoMutualFriendsSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 4411 */;
import getIllustrationSource from "getIllustrationSource" /* 8233 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualFriends.tsx");

export const getNoMutualFriendsSource = function getNoMutualFriendsSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(12615);
    },
    darker() {
      return callback(12616);
    },
    light() {
      return callback(12617);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoMutualFriendsSource = function useNoMutualFriendsSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(12615);
    },
    darker() {
      return callback(12616);
    },
    light() {
      return callback(12617);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoMutualFriends = function NoMutualFriends(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(12615);
    },
    darker() {
      return callback(12616);
    },
    light() {
      return callback(12617);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
