// Module ID: 17738
// Function ID: 17739
// Name: BansEmpty
// Dependencies: [19, 17, 21, 8319, 17739, 17740, 17741, 4458, 2]
// Exports: BansEmpty, getBansEmptySource, useBansEmptySource

// Module 17738 (BansEmpty)
import shared from "shared" /* 4458 */;
import _mod8319 from "module_8319" /* 8319 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export const getBansEmptySource = function getBansEmptySource(theme) {
  return _mod8319.getIllustrationSource(theme, {
    dark() {
      return require("module_17739");
    },
    darker() {
      return require("module_17740");
    },
    light() {
      return require("module_17741");
    }
  });
};
export const useBansEmptySource = function useBansEmptySource() {
  const obj = shared;
  return _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17739");
    },
    darker() {
      return require("module_17740");
    },
    light() {
      return require("module_17741");
    }
  });
};
export const BansEmpty = function BansEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17739");
    },
    darker() {
      return require("module_17740");
    },
    light() {
      return require("module_17741");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
