// Module ID: 9853
// Function ID: 9854
// Name: NoResultsAlt
// Dependencies: [19, 17, 21, 8319, 9854, 9855, 7128, 4458, 2]
// Exports: NoResultsAlt, getNoResultsAltSource, useNoResultsAltSource

// Module 9853 (NoResultsAlt)
import shared from "shared" /* 4458 */;
import _mod8319 from "module_8319" /* 8319 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResultsAlt.tsx");

export const getNoResultsAltSource = function getNoResultsAltSource(theme) {
  return _mod8319.getIllustrationSource(theme, {
    dark() {
      return require("module_9854");
    },
    darker() {
      return require("module_9855");
    },
    light() {
      return require("module_7128");
    }
  });
};
export const useNoResultsAltSource = function useNoResultsAltSource() {
  const obj = shared;
  return _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9854");
    },
    darker() {
      return require("module_9855");
    },
    light() {
      return require("module_7128");
    }
  });
};
export const NoResultsAlt = function NoResultsAlt(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9854");
    },
    darker() {
      return require("module_9855");
    },
    light() {
      return require("module_7128");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
