// Module ID: 9851
// Function ID: 9852
// Name: NoResultsAlt
// Dependencies: [19, 17, 21, 8317, 9852, 9853, 7127, 4458, 2]
// Exports: NoResultsAlt, getNoResultsAltSource, useNoResultsAltSource

// Module 9851 (NoResultsAlt)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResultsAlt.tsx");

export const getNoResultsAltSource = function getNoResultsAltSource(theme) {
  return _mod8317.getIllustrationSource(theme, {
    dark() {
      return require("module_9852");
    },
    darker() {
      return require("module_9853");
    },
    light() {
      return require("module_7127");
    }
  });
};
export const useNoResultsAltSource = function useNoResultsAltSource() {
  const obj = shared;
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9852");
    },
    darker() {
      return require("module_9853");
    },
    light() {
      return require("module_7127");
    }
  });
};
export const NoResultsAlt = function NoResultsAlt(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9852");
    },
    darker() {
      return require("module_9853");
    },
    light() {
      return require("module_7127");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
