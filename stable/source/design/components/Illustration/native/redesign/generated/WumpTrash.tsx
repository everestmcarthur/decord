// Module ID: 15981
// Function ID: 15982
// Name: WumpTrash
// Dependencies: [19, 17, 21, 8234, 15982, 15983, 4411, 2]
// Exports: WumpTrash, getWumpTrashSource, useWumpTrashSource

// Module 15981 (WumpTrash)
import shared from "shared" /* 4411 */;
import _mod8234 from "module_8234" /* 8234 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WumpTrash.tsx");

export const getWumpTrashSource = function getWumpTrashSource(theme) {
  return _mod8234.getIllustrationSource(theme, {
    dark() {
      return require("module_15982");
    },
    darker() {
      return require("module_15983");
    }
  });
};
export const useWumpTrashSource = function useWumpTrashSource() {
  const obj = shared;
  return _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_15982");
    },
    darker() {
      return require("module_15983");
    }
  });
};
export const WumpTrash = function WumpTrash(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_15982");
    },
    darker() {
      return require("module_15983");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
