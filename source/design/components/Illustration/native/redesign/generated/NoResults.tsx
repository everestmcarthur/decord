// Module ID: 8318
// Function ID: 8319
// Name: generated/NoResults
// Dependencies: [19, 17, 21, 8319, 8320, 8321, 8322, 4458, 2]
// Exports: NoResults, getNoResultsSource, useNoResultsSource

// Module 8318 (generated/NoResults)
import shared from "shared" /* 4458 */;
import _mod8319 from "module_8319" /* 8319 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResults.tsx");

export const getNoResultsSource = function getNoResultsSource(theme) {
  return _mod8319.getIllustrationSource(theme, {
    dark() {
      return require("module_8320");
    },
    darker() {
      return require("module_8321");
    },
    light() {
      return require("module_8322");
    }
  });
};
export const useNoResultsSource = function useNoResultsSource() {
  const obj = shared;
  return _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_8320");
    },
    darker() {
      return require("module_8321");
    },
    light() {
      return require("module_8322");
    }
  });
};
export const NoResults = function NoResults(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_8320");
    },
    darker() {
      return require("module_8321");
    },
    light() {
      return require("module_8322");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
