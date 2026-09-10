// Module ID: 14831
// Function ID: 14832
// Name: Blocked
// Dependencies: [19, 17, 21, 8259, 14832, 14833, 14834, 4425, 2]
// Exports: Blocked, getBlockedSource, useBlockedSource

// Module 14831 (Blocked)
import shared from "shared" /* 4425 */;
import _mod8259 from "module_8259" /* 8259 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export const getBlockedSource = function getBlockedSource(theme) {
  return _mod8259.getIllustrationSource(theme, {
    dark() {
      return require("module_14832");
    },
    darker() {
      return require("module_14833");
    },
    light() {
      return require("module_14834");
    }
  });
};
export const useBlockedSource = function useBlockedSource() {
  const obj = shared;
  return _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_14832");
    },
    darker() {
      return require("module_14833");
    },
    light() {
      return require("module_14834");
    }
  });
};
export const Blocked = function Blocked(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_14832");
    },
    darker() {
      return require("module_14833");
    },
    light() {
      return require("module_14834");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
