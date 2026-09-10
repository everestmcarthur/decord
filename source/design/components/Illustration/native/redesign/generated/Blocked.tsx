// Module ID: 14880
// Function ID: 14881
// Name: Blocked
// Dependencies: [19, 17, 21, 8296, 14881, 14882, 14883, 4456, 2]
// Exports: Blocked, getBlockedSource, useBlockedSource

// Module 14880 (Blocked)
import shared from "shared" /* 4456 */;
import _mod8296 from "module_8296" /* 8296 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export const getBlockedSource = function getBlockedSource(theme) {
  return _mod8296.getIllustrationSource(theme, {
    dark() {
      return require("module_14881");
    },
    darker() {
      return require("module_14882");
    },
    light() {
      return require("module_14883");
    }
  });
};
export const useBlockedSource = function useBlockedSource() {
  const obj = shared;
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_14881");
    },
    darker() {
      return require("module_14882");
    },
    light() {
      return require("module_14883");
    }
  });
};
export const Blocked = function Blocked(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_14881");
    },
    darker() {
      return require("module_14882");
    },
    light() {
      return require("module_14883");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
