// Module ID: 16973
// Function ID: 16974
// Name: Pending
// Dependencies: [19, 17, 21, 8317, 16974, 16975, 16976, 4458, 2]
// Exports: Pending, getPendingSource, usePendingSource

// Module 16973 (Pending)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Pending.tsx");

export const getPendingSource = function getPendingSource(theme) {
  return _mod8317.getIllustrationSource(theme, {
    dark() {
      return require("module_16974");
    },
    darker() {
      return require("module_16975");
    },
    light() {
      return require("module_16976");
    }
  });
};
export const usePendingSource = function usePendingSource() {
  const obj = shared;
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16974");
    },
    darker() {
      return require("module_16975");
    },
    light() {
      return require("module_16976");
    }
  });
};
export const Pending = function Pending(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16974");
    },
    darker() {
      return require("module_16975");
    },
    light() {
      return require("module_16976");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
