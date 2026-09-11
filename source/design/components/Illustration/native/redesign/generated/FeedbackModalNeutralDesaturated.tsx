// Module ID: 11732
// Function ID: 11733
// Name: FeedbackModalNeutralDesaturated
// Dependencies: [19, 17, 21, 8319, 11733, 11734, 11735, 4458, 2]
// Exports: FeedbackModalNeutralDesaturated, getFeedbackModalNeutralDesaturatedSource, useFeedbackModalNeutralDesaturatedSource

// Module 11732 (FeedbackModalNeutralDesaturated)
import shared from "shared" /* 4458 */;
import _mod8319 from "module_8319" /* 8319 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalNeutralDesaturated.tsx");

export const getFeedbackModalNeutralDesaturatedSource = function getFeedbackModalNeutralDesaturatedSource(theme) {
  return _mod8319.getIllustrationSource(theme, {
    dark() {
      return require("module_11733");
    },
    darker() {
      return require("module_11734");
    },
    light() {
      return require("module_11735");
    }
  });
};
export const useFeedbackModalNeutralDesaturatedSource = function useFeedbackModalNeutralDesaturatedSource() {
  const obj = shared;
  return _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11733");
    },
    darker() {
      return require("module_11734");
    },
    light() {
      return require("module_11735");
    }
  });
};
export const FeedbackModalNeutralDesaturated = function FeedbackModalNeutralDesaturated(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11733");
    },
    darker() {
      return require("module_11734");
    },
    light() {
      return require("module_11735");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
