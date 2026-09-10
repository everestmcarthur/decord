// Module ID: 10387
// Function ID: 10388
// Name: SearchEmpty
// Dependencies: [19, 17, 21, 8296, 10388, 10389, 10390, 4456, 2]
// Exports: SearchEmpty, getSearchEmptySource, useSearchEmptySource

// Module 10387 (SearchEmpty)
import shared from "shared" /* 4456 */;
import _mod8296 from "module_8296" /* 8296 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export const getSearchEmptySource = function getSearchEmptySource(theme) {
  return _mod8296.getIllustrationSource(theme, {
    dark() {
      return require("module_10388");
    },
    darker() {
      return require("module_10389");
    },
    light() {
      return require("module_10390");
    }
  });
};
export const useSearchEmptySource = function useSearchEmptySource() {
  const obj = shared;
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10388");
    },
    darker() {
      return require("module_10389");
    },
    light() {
      return require("module_10390");
    }
  });
};
export const SearchEmpty = function SearchEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10388");
    },
    darker() {
      return require("module_10389");
    },
    light() {
      return require("module_10390");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
