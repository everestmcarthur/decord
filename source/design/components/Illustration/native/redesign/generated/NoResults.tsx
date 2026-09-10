// Module ID: 8258
// Function ID: 8259
// Name: generated/NoResults
// Dependencies: [19, 17, 21, 8259, 8260, 8261, 8262, 4425, 2]
// Exports: NoResults, getNoResultsSource, useNoResultsSource

// Module 8258 (generated/NoResults)
import shared from "shared" /* 4425 */;
import _mod8259 from "module_8259" /* 8259 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResults.tsx");

export const getNoResultsSource = function getNoResultsSource(theme) {
  return _mod8259.getIllustrationSource(theme, {
    dark() {
      return require("module_8260");
    },
    darker() {
      return require("module_8261");
    },
    light() {
      return require("module_8262");
    }
  });
};
export const useNoResultsSource = function useNoResultsSource() {
  const obj = shared;
  return _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_8260");
    },
    darker() {
      return require("module_8261");
    },
    light() {
      return require("module_8262");
    }
  });
};
export const NoResults = function NoResults(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_8260");
    },
    darker() {
      return require("module_8261");
    },
    light() {
      return require("module_8262");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
