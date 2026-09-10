// Module ID: 16984
// Function ID: 16985
// Name: Pending
// Dependencies: [19, 17, 21, 8296, 16985, 16986, 16987, 4456, 2]
// Exports: Pending, getPendingSource, usePendingSource

// Module 16984 (Pending)
import shared from "shared" /* 4456 */;
import _mod8296 from "module_8296" /* 8296 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Pending.tsx");

export const getPendingSource = function getPendingSource(theme) {
  return _mod8296.getIllustrationSource(theme, {
    dark() {
      return require("module_16985");
    },
    darker() {
      return require("module_16986");
    },
    light() {
      return require("module_16987");
    }
  });
};
export const usePendingSource = function usePendingSource() {
  const obj = shared;
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16985");
    },
    darker() {
      return require("module_16986");
    },
    light() {
      return require("module_16987");
    }
  });
};
export const Pending = function Pending(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16985");
    },
    darker() {
      return require("module_16986");
    },
    light() {
      return require("module_16987");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
