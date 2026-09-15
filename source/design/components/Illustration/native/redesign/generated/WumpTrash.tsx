// Module ID: 16088
// Function ID: 16089
// Name: WumpTrash
// Dependencies: [19, 17, 21, 8352, 16089, 16090, 4491, 2]
// Exports: WumpTrash, getWumpTrashSource, useWumpTrashSource

// Module 16088 (WumpTrash)
import shared from "shared" /* 4491 */;
import _mod8352 from "module_8352" /* 8352 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WumpTrash.tsx");

export const getWumpTrashSource = function getWumpTrashSource(theme) {
  return _mod8352.getIllustrationSource(theme, {
    dark() {
      return require("module_16089");
    },
    darker() {
      return require("module_16090");
    }
  });
};
export const useWumpTrashSource = function useWumpTrashSource() {
  const obj = shared;
  return _mod8352.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16089");
    },
    darker() {
      return require("module_16090");
    }
  });
};
export const WumpTrash = function WumpTrash(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8352.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16089");
    },
    darker() {
      return require("module_16090");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
