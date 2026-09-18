// Module ID: 10322
// Function ID: 10323
// Name: SearchEmpty
// Dependencies: [19, 17, 21, 8234, 10323, 10324, 10325, 4411, 2]
// Exports: SearchEmpty, getSearchEmptySource, useSearchEmptySource

// Module 10322 (SearchEmpty)
import shared from "shared" /* 4411 */;
import _mod8234 from "module_8234" /* 8234 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export const getSearchEmptySource = function getSearchEmptySource(theme) {
  return _mod8234.getIllustrationSource(theme, {
    dark() {
      return require("module_10323");
    },
    darker() {
      return require("module_10324");
    },
    light() {
      return require("module_10325");
    }
  });
};
export const useSearchEmptySource = function useSearchEmptySource() {
  const obj = shared;
  return _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10323");
    },
    darker() {
      return require("module_10324");
    },
    light() {
      return require("module_10325");
    }
  });
};
export const SearchEmpty = function SearchEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10323");
    },
    darker() {
      return require("module_10324");
    },
    light() {
      return require("module_10325");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
