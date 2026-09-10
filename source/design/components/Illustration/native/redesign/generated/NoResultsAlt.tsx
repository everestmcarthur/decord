// Module ID: 9830
// Function ID: 9831
// Name: NoResultsAlt
// Dependencies: [19, 17, 21, 8296, 9831, 9832, 7106, 4456, 2]
// Exports: NoResultsAlt, getNoResultsAltSource, useNoResultsAltSource

// Module 9830 (NoResultsAlt)
import shared from "shared" /* 4456 */;
import _mod8296 from "module_8296" /* 8296 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResultsAlt.tsx");

export const getNoResultsAltSource = function getNoResultsAltSource(theme) {
  return _mod8296.getIllustrationSource(theme, {
    dark() {
      return require("module_9831");
    },
    darker() {
      return require("module_9832");
    },
    light() {
      return require("module_7106");
    }
  });
};
export const useNoResultsAltSource = function useNoResultsAltSource() {
  const obj = shared;
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9831");
    },
    darker() {
      return require("module_9832");
    },
    light() {
      return require("module_7106");
    }
  });
};
export const NoResultsAlt = function NoResultsAlt(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9831");
    },
    darker() {
      return require("module_9832");
    },
    light() {
      return require("module_7106");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
