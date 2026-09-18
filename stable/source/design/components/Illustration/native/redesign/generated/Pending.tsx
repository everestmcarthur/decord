// Module ID: 16890
// Function ID: 16891
// Name: Pending
// Dependencies: [19, 17, 21, 8234, 16891, 16892, 16893, 4411, 2]
// Exports: Pending, getPendingSource, usePendingSource

// Module 16890 (Pending)
import shared from "shared" /* 4411 */;
import _mod8234 from "module_8234" /* 8234 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Pending.tsx");

export const getPendingSource = function getPendingSource(theme) {
  return _mod8234.getIllustrationSource(theme, {
    dark() {
      return require("module_16891");
    },
    darker() {
      return require("module_16892");
    },
    light() {
      return require("module_16893");
    }
  });
};
export const usePendingSource = function usePendingSource() {
  const obj = shared;
  return _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16891");
    },
    darker() {
      return require("module_16892");
    },
    light() {
      return require("module_16893");
    }
  });
};
export const Pending = function Pending(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16891");
    },
    darker() {
      return require("module_16892");
    },
    light() {
      return require("module_16893");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
