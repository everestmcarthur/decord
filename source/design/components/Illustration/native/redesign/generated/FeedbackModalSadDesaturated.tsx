// Module ID: 11727
// Function ID: 11728
// Name: FeedbackModalSadDesaturated
// Dependencies: [19, 17, 21, 8319, 11728, 11729, 11730, 4458, 2]
// Exports: FeedbackModalSadDesaturated, getFeedbackModalSadDesaturatedSource, useFeedbackModalSadDesaturatedSource

// Module 11727 (FeedbackModalSadDesaturated)
import shared from "shared" /* 4458 */;
import _mod8319 from "module_8319" /* 8319 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalSadDesaturated.tsx");

export const getFeedbackModalSadDesaturatedSource = function getFeedbackModalSadDesaturatedSource(theme) {
  return _mod8319.getIllustrationSource(theme, {
    dark() {
      return require("module_11728");
    },
    darker() {
      return require("module_11729");
    },
    light() {
      return require("module_11730");
    }
  });
};
export const useFeedbackModalSadDesaturatedSource = function useFeedbackModalSadDesaturatedSource() {
  const obj = shared;
  return _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11728");
    },
    darker() {
      return require("module_11729");
    },
    light() {
      return require("module_11730");
    }
  });
};
export const FeedbackModalSadDesaturated = function FeedbackModalSadDesaturated(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11728");
    },
    darker() {
      return require("module_11729");
    },
    light() {
      return require("module_11730");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
