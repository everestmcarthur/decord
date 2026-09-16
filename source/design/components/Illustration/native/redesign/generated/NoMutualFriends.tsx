// Module ID: 12753
// Function ID: 12754
// Name: NoMutualFriends
// Dependencies: [19, 17, 21, 8361, 12754, 12755, 12756, 4489, 2]
// Exports: NoMutualFriends, getNoMutualFriendsSource, useNoMutualFriendsSource

// Module 12753 (NoMutualFriends)
import shared from "shared" /* 4489 */;
import _mod8361 from "module_8361" /* 8361 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualFriends.tsx");

export const getNoMutualFriendsSource = function getNoMutualFriendsSource(theme) {
  return _mod8361.getIllustrationSource(theme, {
    dark() {
      return require("module_12754");
    },
    darker() {
      return require("module_12755");
    },
    light() {
      return require("module_12756");
    }
  });
};
export const useNoMutualFriendsSource = function useNoMutualFriendsSource() {
  const obj = shared;
  return _mod8361.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_12754");
    },
    darker() {
      return require("module_12755");
    },
    light() {
      return require("module_12756");
    }
  });
};
export const NoMutualFriends = function NoMutualFriends(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8361.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_12754");
    },
    darker() {
      return require("module_12755");
    },
    light() {
      return require("module_12756");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
