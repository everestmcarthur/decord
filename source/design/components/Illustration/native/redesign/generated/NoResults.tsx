// Module ID: 8295
// Function ID: 8296
// Name: generated/NoResults
// Dependencies: [19, 17, 21, 8296, 8297, 8298, 8299, 4456, 2]
// Exports: NoResults, getNoResultsSource, useNoResultsSource

// Module 8295 (generated/NoResults)
import shared from "shared" /* 4456 */;
import _mod8296 from "module_8296" /* 8296 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResults.tsx");

export const getNoResultsSource = function getNoResultsSource(theme) {
  return _mod8296.getIllustrationSource(theme, {
    dark() {
      return require("module_8297");
    },
    darker() {
      return require("module_8298");
    },
    light() {
      return require("module_8299");
    }
  });
};
export const useNoResultsSource = function useNoResultsSource() {
  const obj = shared;
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_8297");
    },
    darker() {
      return require("module_8298");
    },
    light() {
      return require("module_8299");
    }
  });
};
export const NoResults = function NoResults(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_8297");
    },
    darker() {
      return require("module_8298");
    },
    light() {
      return require("module_8299");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
