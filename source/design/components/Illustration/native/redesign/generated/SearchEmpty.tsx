// Module ID: 10445
// Function ID: 10446
// Name: SearchEmpty
// Dependencies: [19, 17, 21, 8349, 10446, 10447, 10448, 4488, 2]
// Exports: SearchEmpty, getSearchEmptySource, useSearchEmptySource

// Module 10445 (SearchEmpty)
import shared from "shared" /* 4488 */;
import _mod8349 from "module_8349" /* 8349 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export const getSearchEmptySource = function getSearchEmptySource(theme) {
  return _mod8349.getIllustrationSource(theme, {
    dark() {
      return require("module_10446");
    },
    darker() {
      return require("module_10447");
    },
    light() {
      return require("module_10448");
    }
  });
};
export const useSearchEmptySource = function useSearchEmptySource() {
  const obj = shared;
  return _mod8349.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10446");
    },
    darker() {
      return require("module_10447");
    },
    light() {
      return require("module_10448");
    }
  });
};
export const SearchEmpty = function SearchEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8349.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10446");
    },
    darker() {
      return require("module_10447");
    },
    light() {
      return require("module_10448");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
