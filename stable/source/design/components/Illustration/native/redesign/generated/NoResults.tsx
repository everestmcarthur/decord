// Module ID: 8233
// Function ID: 8234
// Name: generated/NoResults
// Dependencies: [19, 17, 21, 8234, 8235, 8236, 8237, 4411, 2]
// Exports: NoResults, getNoResultsSource, useNoResultsSource

// Module 8233 (generated/NoResults)
import shared from "shared" /* 4411 */;
import _mod8234 from "module_8234" /* 8234 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResults.tsx");

export const getNoResultsSource = function getNoResultsSource(theme) {
  return _mod8234.getIllustrationSource(theme, {
    dark() {
      return require("module_8235");
    },
    darker() {
      return require("module_8236");
    },
    light() {
      return require("module_8237");
    }
  });
};
export const useNoResultsSource = function useNoResultsSource() {
  const obj = shared;
  return _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_8235");
    },
    darker() {
      return require("module_8236");
    },
    light() {
      return require("module_8237");
    }
  });
};
export const NoResults = function NoResults(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_8235");
    },
    darker() {
      return require("module_8236");
    },
    light() {
      return require("module_8237");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
