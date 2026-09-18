// Module ID: 10005
// Function ID: 10006
// Name: NoResultsAlt
// Dependencies: [19, 17, 21, 8463, 10006, 10007, 7250, 4573, 2]
// Exports: NoResultsAlt, getNoResultsAltSource, useNoResultsAltSource

// Module 10005 (NoResultsAlt)
import shared from "shared" /* 4573 */;
import _mod8463 from "module_8463" /* 8463 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResultsAlt.tsx");

export const getNoResultsAltSource = function getNoResultsAltSource(theme) {
  return _mod8463.getIllustrationSource(theme, {
    dark() {
      return require("module_10006");
    },
    darker() {
      return require("module_10007");
    },
    light() {
      return require("module_7250");
    }
  });
};
export const useNoResultsAltSource = function useNoResultsAltSource() {
  const obj = shared;
  return _mod8463.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10006");
    },
    darker() {
      return require("module_10007");
    },
    light() {
      return require("module_7250");
    }
  });
};
export const NoResultsAlt = function NoResultsAlt(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8463.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10006");
    },
    darker() {
      return require("module_10007");
    },
    light() {
      return require("module_7250");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
