// Module ID: 9766
// Function ID: 9767
// Name: NoResultsAlt
// Dependencies: [19, 17, 21, 8234, 9767, 9768, 7054, 4411, 2]
// Exports: NoResultsAlt, getNoResultsAltSource, useNoResultsAltSource

// Module 9766 (NoResultsAlt)
import shared from "shared" /* 4411 */;
import _mod8234 from "module_8234" /* 8234 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResultsAlt.tsx");

export const getNoResultsAltSource = function getNoResultsAltSource(theme) {
  return _mod8234.getIllustrationSource(theme, {
    dark() {
      return require("module_9767");
    },
    darker() {
      return require("module_9768");
    },
    light() {
      return require("module_7054");
    }
  });
};
export const useNoResultsAltSource = function useNoResultsAltSource() {
  const obj = shared;
  return _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9767");
    },
    darker() {
      return require("module_9768");
    },
    light() {
      return require("module_7054");
    }
  });
};
export const NoResultsAlt = function NoResultsAlt(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9767");
    },
    darker() {
      return require("module_9768");
    },
    light() {
      return require("module_7054");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
