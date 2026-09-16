// Module ID: 17862
// Function ID: 17863
// Name: BansEmpty
// Dependencies: [19, 17, 21, 8361, 17863, 17864, 17865, 4489, 2]
// Exports: BansEmpty, getBansEmptySource, useBansEmptySource

// Module 17862 (BansEmpty)
import shared from "shared" /* 4489 */;
import _mod8361 from "module_8361" /* 8361 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export const getBansEmptySource = function getBansEmptySource(theme) {
  return _mod8361.getIllustrationSource(theme, {
    dark() {
      return require("module_17863");
    },
    darker() {
      return require("module_17864");
    },
    light() {
      return require("module_17865");
    }
  });
};
export const useBansEmptySource = function useBansEmptySource() {
  const obj = shared;
  return _mod8361.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17863");
    },
    darker() {
      return require("module_17864");
    },
    light() {
      return require("module_17865");
    }
  });
};
export const BansEmpty = function BansEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8361.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17863");
    },
    darker() {
      return require("module_17864");
    },
    light() {
      return require("module_17865");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
