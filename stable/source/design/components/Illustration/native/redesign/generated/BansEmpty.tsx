// Module ID: 17654
// Function ID: 17655
// Name: BansEmpty
// Dependencies: [19, 17, 21, 8234, 17655, 17656, 17657, 4411, 2]
// Exports: BansEmpty, getBansEmptySource, useBansEmptySource

// Module 17654 (BansEmpty)
import shared from "shared" /* 4411 */;
import _mod8234 from "module_8234" /* 8234 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export const getBansEmptySource = function getBansEmptySource(theme) {
  return _mod8234.getIllustrationSource(theme, {
    dark() {
      return require("module_17655");
    },
    darker() {
      return require("module_17656");
    },
    light() {
      return require("module_17657");
    }
  });
};
export const useBansEmptySource = function useBansEmptySource() {
  const obj = shared;
  return _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17655");
    },
    darker() {
      return require("module_17656");
    },
    light() {
      return require("module_17657");
    }
  });
};
export const BansEmpty = function BansEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17655");
    },
    darker() {
      return require("module_17656");
    },
    light() {
      return require("module_17657");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
