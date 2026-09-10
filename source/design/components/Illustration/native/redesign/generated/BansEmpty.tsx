// Module ID: 17746
// Function ID: 17747
// Name: BansEmpty
// Dependencies: [19, 17, 21, 8296, 17747, 17748, 17749, 4456, 2]
// Exports: BansEmpty, getBansEmptySource, useBansEmptySource

// Module 17746 (BansEmpty)
import shared from "shared" /* 4456 */;
import _mod8296 from "module_8296" /* 8296 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export const getBansEmptySource = function getBansEmptySource(theme) {
  return _mod8296.getIllustrationSource(theme, {
    dark() {
      return require("module_17747");
    },
    darker() {
      return require("module_17748");
    },
    light() {
      return require("module_17749");
    }
  });
};
export const useBansEmptySource = function useBansEmptySource() {
  const obj = shared;
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17747");
    },
    darker() {
      return require("module_17748");
    },
    light() {
      return require("module_17749");
    }
  });
};
export const BansEmpty = function BansEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17747");
    },
    darker() {
      return require("module_17748");
    },
    light() {
      return require("module_17749");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
