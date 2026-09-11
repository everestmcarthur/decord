// Module ID: 16049
// Function ID: 16050
// Name: WumpTrash
// Dependencies: [19, 17, 21, 8319, 16050, 16051, 4458, 2]
// Exports: WumpTrash, getWumpTrashSource, useWumpTrashSource

// Module 16049 (WumpTrash)
import shared from "shared" /* 4458 */;
import _mod8319 from "module_8319" /* 8319 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WumpTrash.tsx");

export const getWumpTrashSource = function getWumpTrashSource(theme) {
  return _mod8319.getIllustrationSource(theme, {
    dark() {
      return require("module_16050");
    },
    darker() {
      return require("module_16051");
    }
  });
};
export const useWumpTrashSource = function useWumpTrashSource() {
  const obj = shared;
  return _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16050");
    },
    darker() {
      return require("module_16051");
    }
  });
};
export const WumpTrash = function WumpTrash(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16050");
    },
    darker() {
      return require("module_16051");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
