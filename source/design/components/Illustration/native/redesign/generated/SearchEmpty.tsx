// Module ID: 10349
// Function ID: 10350
// Name: SearchEmpty
// Dependencies: [19, 17, 21, 8259, 10350, 10351, 10352, 4425, 2]
// Exports: SearchEmpty, getSearchEmptySource, useSearchEmptySource

// Module 10349 (SearchEmpty)
import shared from "shared" /* 4425 */;
import _mod8259 from "module_8259" /* 8259 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export const getSearchEmptySource = function getSearchEmptySource(theme) {
  return _mod8259.getIllustrationSource(theme, {
    dark() {
      return require("module_10350");
    },
    darker() {
      return require("module_10351");
    },
    light() {
      return require("module_10352");
    }
  });
};
export const useSearchEmptySource = function useSearchEmptySource() {
  const obj = shared;
  return _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10350");
    },
    darker() {
      return require("module_10351");
    },
    light() {
      return require("module_10352");
    }
  });
};
export const SearchEmpty = function SearchEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10350");
    },
    darker() {
      return require("module_10351");
    },
    light() {
      return require("module_10352");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
