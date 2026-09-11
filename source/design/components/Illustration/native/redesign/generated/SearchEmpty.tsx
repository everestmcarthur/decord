// Module ID: 10408
// Function ID: 10409
// Name: SearchEmpty
// Dependencies: [19, 17, 21, 8319, 10409, 10410, 10411, 4458, 2]
// Exports: SearchEmpty, getSearchEmptySource, useSearchEmptySource

// Module 10408 (SearchEmpty)
import shared from "shared" /* 4458 */;
import _mod8319 from "module_8319" /* 8319 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export const getSearchEmptySource = function getSearchEmptySource(theme) {
  return _mod8319.getIllustrationSource(theme, {
    dark() {
      return require("module_10409");
    },
    darker() {
      return require("module_10410");
    },
    light() {
      return require("module_10411");
    }
  });
};
export const useSearchEmptySource = function useSearchEmptySource() {
  const obj = shared;
  return _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10409");
    },
    darker() {
      return require("module_10410");
    },
    light() {
      return require("module_10411");
    }
  });
};
export const SearchEmpty = function SearchEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10409");
    },
    darker() {
      return require("module_10410");
    },
    light() {
      return require("module_10411");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
