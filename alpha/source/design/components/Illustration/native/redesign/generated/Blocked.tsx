// Module ID: 15019
// Function ID: 15020
// Name: Blocked
// Dependencies: [19, 17, 21, 8463, 15020, 15021, 15022, 4573, 2]
// Exports: Blocked, getBlockedSource, useBlockedSource

// Module 15019 (Blocked)
import shared from "shared" /* 4573 */;
import _mod8463 from "module_8463" /* 8463 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export const getBlockedSource = function getBlockedSource(theme) {
  return _mod8463.getIllustrationSource(theme, {
    dark() {
      return require("module_15020");
    },
    darker() {
      return require("module_15021");
    },
    light() {
      return require("module_15022");
    }
  });
};
export const useBlockedSource = function useBlockedSource() {
  const obj = shared;
  return _mod8463.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_15020");
    },
    darker() {
      return require("module_15021");
    },
    light() {
      return require("module_15022");
    }
  });
};
export const Blocked = function Blocked(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8463.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_15020");
    },
    darker() {
      return require("module_15021");
    },
    light() {
      return require("module_15022");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
