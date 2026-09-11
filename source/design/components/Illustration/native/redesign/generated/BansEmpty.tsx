// Module ID: 17737
// Function ID: 17738
// Name: BansEmpty
// Dependencies: [19, 17, 21, 8317, 17738, 17739, 17740, 4458, 2]
// Exports: BansEmpty, getBansEmptySource, useBansEmptySource

// Module 17737 (BansEmpty)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export const getBansEmptySource = function getBansEmptySource(theme) {
  return _mod8317.getIllustrationSource(theme, {
    dark() {
      return require("module_17738");
    },
    darker() {
      return require("module_17739");
    },
    light() {
      return require("module_17740");
    }
  });
};
export const useBansEmptySource = function useBansEmptySource() {
  const obj = shared;
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17738");
    },
    darker() {
      return require("module_17739");
    },
    light() {
      return require("module_17740");
    }
  });
};
export const BansEmpty = function BansEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17738");
    },
    darker() {
      return require("module_17739");
    },
    light() {
      return require("module_17740");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
