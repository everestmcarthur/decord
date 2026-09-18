// Module ID: 16227
// Function ID: 16228
// Name: WumpTrash
// Dependencies: [19, 17, 21, 8463, 16228, 16229, 4573, 2]
// Exports: WumpTrash, getWumpTrashSource, useWumpTrashSource

// Module 16227 (WumpTrash)
import shared from "shared" /* 4573 */;
import _mod8463 from "module_8463" /* 8463 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WumpTrash.tsx");

export const getWumpTrashSource = function getWumpTrashSource(theme) {
  return _mod8463.getIllustrationSource(theme, {
    dark() {
      return require("module_16228");
    },
    darker() {
      return require("module_16229");
    }
  });
};
export const useWumpTrashSource = function useWumpTrashSource() {
  const obj = shared;
  return _mod8463.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16228");
    },
    darker() {
      return require("module_16229");
    }
  });
};
export const WumpTrash = function WumpTrash(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8463.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16228");
    },
    darker() {
      return require("module_16229");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
