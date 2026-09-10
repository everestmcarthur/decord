// Module ID: 12680
// Function ID: 12681
// Name: NoMutualFriends
// Dependencies: [19, 17, 21, 8296, 12681, 12682, 12683, 4456, 2]
// Exports: NoMutualFriends, getNoMutualFriendsSource, useNoMutualFriendsSource

// Module 12680 (NoMutualFriends)
import shared from "shared" /* 4456 */;
import _mod8296 from "module_8296" /* 8296 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualFriends.tsx");

export const getNoMutualFriendsSource = function getNoMutualFriendsSource(theme) {
  return _mod8296.getIllustrationSource(theme, {
    dark() {
      return require("module_12681");
    },
    darker() {
      return require("module_12682");
    },
    light() {
      return require("module_12683");
    }
  });
};
export const useNoMutualFriendsSource = function useNoMutualFriendsSource() {
  const obj = shared;
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_12681");
    },
    darker() {
      return require("module_12682");
    },
    light() {
      return require("module_12683");
    }
  });
};
export const NoMutualFriends = function NoMutualFriends(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_12681");
    },
    darker() {
      return require("module_12682");
    },
    light() {
      return require("module_12683");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
