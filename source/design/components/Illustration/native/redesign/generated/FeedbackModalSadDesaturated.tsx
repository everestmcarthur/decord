// Module ID: 11703
// Function ID: 11704
// Name: FeedbackModalSadDesaturated
// Dependencies: [19, 17, 21, 8296, 11704, 11705, 11706, 4456, 2]
// Exports: FeedbackModalSadDesaturated, getFeedbackModalSadDesaturatedSource, useFeedbackModalSadDesaturatedSource

// Module 11703 (FeedbackModalSadDesaturated)
import shared from "shared" /* 4456 */;
import _mod8296 from "module_8296" /* 8296 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalSadDesaturated.tsx");

export const getFeedbackModalSadDesaturatedSource = function getFeedbackModalSadDesaturatedSource(theme) {
  return _mod8296.getIllustrationSource(theme, {
    dark() {
      return require("module_11704");
    },
    darker() {
      return require("module_11705");
    },
    light() {
      return require("module_11706");
    }
  });
};
export const useFeedbackModalSadDesaturatedSource = function useFeedbackModalSadDesaturatedSource() {
  const obj = shared;
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11704");
    },
    darker() {
      return require("module_11705");
    },
    light() {
      return require("module_11706");
    }
  });
};
export const FeedbackModalSadDesaturated = function FeedbackModalSadDesaturated(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11704");
    },
    darker() {
      return require("module_11705");
    },
    light() {
      return require("module_11706");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
