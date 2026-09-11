// Module ID: 12705
// Function ID: 12706
// Name: NoMutualFriends
// Dependencies: [19, 17, 21, 8319, 12706, 12707, 12708, 4458, 2]
// Exports: NoMutualFriends, getNoMutualFriendsSource, useNoMutualFriendsSource

// Module 12705 (NoMutualFriends)
import shared from "shared" /* 4458 */;
import _mod8319 from "module_8319" /* 8319 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualFriends.tsx");

export const getNoMutualFriendsSource = function getNoMutualFriendsSource(theme) {
  return _mod8319.getIllustrationSource(theme, {
    dark() {
      return require("module_12706");
    },
    darker() {
      return require("module_12707");
    },
    light() {
      return require("module_12708");
    }
  });
};
export const useNoMutualFriendsSource = function useNoMutualFriendsSource() {
  const obj = shared;
  return _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_12706");
    },
    darker() {
      return require("module_12707");
    },
    light() {
      return require("module_12708");
    }
  });
};
export const NoMutualFriends = function NoMutualFriends(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_12706");
    },
    darker() {
      return require("module_12707");
    },
    light() {
      return require("module_12708");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
