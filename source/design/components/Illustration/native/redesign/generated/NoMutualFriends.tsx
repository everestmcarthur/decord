// Module ID: 12640
// Function ID: 12641
// Name: NoMutualFriends
// Dependencies: [19, 17, 21, 8259, 12641, 12642, 12643, 4425, 2]
// Exports: NoMutualFriends, getNoMutualFriendsSource, useNoMutualFriendsSource

// Module 12640 (NoMutualFriends)
import shared from "shared" /* 4425 */;
import _mod8259 from "module_8259" /* 8259 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualFriends.tsx");

export const getNoMutualFriendsSource = function getNoMutualFriendsSource(theme) {
  return _mod8259.getIllustrationSource(theme, {
    dark() {
      return require("module_12641");
    },
    darker() {
      return require("module_12642");
    },
    light() {
      return require("module_12643");
    }
  });
};
export const useNoMutualFriendsSource = function useNoMutualFriendsSource() {
  const obj = shared;
  return _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_12641");
    },
    darker() {
      return require("module_12642");
    },
    light() {
      return require("module_12643");
    }
  });
};
export const NoMutualFriends = function NoMutualFriends(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_12641");
    },
    darker() {
      return require("module_12642");
    },
    light() {
      return require("module_12643");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
