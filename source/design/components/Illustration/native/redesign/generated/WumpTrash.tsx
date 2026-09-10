// Module ID: 16011
// Function ID: 16012
// Name: WumpTrash
// Dependencies: [19, 17, 21, 8259, 16012, 16013, 4425, 2]
// Exports: WumpTrash, getWumpTrashSource, useWumpTrashSource

// Module 16011 (WumpTrash)
import shared from "shared" /* 4425 */;
import _mod8259 from "module_8259" /* 8259 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WumpTrash.tsx");

export const getWumpTrashSource = function getWumpTrashSource(theme) {
  return _mod8259.getIllustrationSource(theme, {
    dark() {
      return require("module_16012");
    },
    darker() {
      return require("module_16013");
    }
  });
};
export const useWumpTrashSource = function useWumpTrashSource() {
  const obj = shared;
  return _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16012");
    },
    darker() {
      return require("module_16013");
    }
  });
};
export const WumpTrash = function WumpTrash(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16012");
    },
    darker() {
      return require("module_16013");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
