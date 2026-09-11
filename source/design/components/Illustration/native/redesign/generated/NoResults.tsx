// Module ID: 8316
// Function ID: 8317
// Name: generated/NoResults
// Dependencies: [19, 17, 21, 8317, 8318, 8319, 8320, 4458, 2]
// Exports: NoResults, getNoResultsSource, useNoResultsSource

// Module 8316 (generated/NoResults)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResults.tsx");

export const getNoResultsSource = function getNoResultsSource(theme) {
  return _mod8317.getIllustrationSource(theme, {
    dark() {
      return require("module_8318");
    },
    darker() {
      return require("module_8319");
    },
    light() {
      return require("module_8320");
    }
  });
};
export const useNoResultsSource = function useNoResultsSource() {
  const obj = shared;
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_8318");
    },
    darker() {
      return require("module_8319");
    },
    light() {
      return require("module_8320");
    }
  });
};
export const NoResults = function NoResults(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_8318");
    },
    darker() {
      return require("module_8319");
    },
    light() {
      return require("module_8320");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
