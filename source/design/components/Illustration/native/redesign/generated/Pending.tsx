// Module ID: 16927
// Function ID: 16928
// Name: Pending
// Dependencies: [19, 17, 21, 8259, 16928, 16929, 16930, 4425, 2]
// Exports: Pending, getPendingSource, usePendingSource

// Module 16927 (Pending)
import shared from "shared" /* 4425 */;
import _mod8259 from "module_8259" /* 8259 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Pending.tsx");

export const getPendingSource = function getPendingSource(theme) {
  return _mod8259.getIllustrationSource(theme, {
    dark() {
      return require("module_16928");
    },
    darker() {
      return require("module_16929");
    },
    light() {
      return require("module_16930");
    }
  });
};
export const usePendingSource = function usePendingSource() {
  const obj = shared;
  return _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16928");
    },
    darker() {
      return require("module_16929");
    },
    light() {
      return require("module_16930");
    }
  });
};
export const Pending = function Pending(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16928");
    },
    darker() {
      return require("module_16929");
    },
    light() {
      return require("module_16930");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
