// Module ID: 12614
// Function ID: 12615
// Name: NoMutualFriends
// Dependencies: [19, 17, 21, 8234, 12615, 12616, 12617, 4411, 2]
// Exports: NoMutualFriends, getNoMutualFriendsSource, useNoMutualFriendsSource

// Module 12614 (NoMutualFriends)
import shared from "shared" /* 4411 */;
import _mod8234 from "module_8234" /* 8234 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualFriends.tsx");

export const getNoMutualFriendsSource = function getNoMutualFriendsSource(theme) {
  return _mod8234.getIllustrationSource(theme, {
    dark() {
      return require("module_12615");
    },
    darker() {
      return require("module_12616");
    },
    light() {
      return require("module_12617");
    }
  });
};
export const useNoMutualFriendsSource = function useNoMutualFriendsSource() {
  const obj = shared;
  return _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_12615");
    },
    darker() {
      return require("module_12616");
    },
    light() {
      return require("module_12617");
    }
  });
};
export const NoMutualFriends = function NoMutualFriends(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_12615");
    },
    darker() {
      return require("module_12616");
    },
    light() {
      return require("module_12617");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
