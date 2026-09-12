// Module ID: 11771
// Function ID: 11772
// Name: FeedbackModalHappyDesaturated
// Dependencies: [19, 17, 21, 8349, 11772, 11773, 11774, 4488, 2]
// Exports: FeedbackModalHappyDesaturated, getFeedbackModalHappyDesaturatedSource, useFeedbackModalHappyDesaturatedSource

// Module 11771 (FeedbackModalHappyDesaturated)
import shared from "shared" /* 4488 */;
import _mod8349 from "module_8349" /* 8349 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalHappyDesaturated.tsx");

export const getFeedbackModalHappyDesaturatedSource = function getFeedbackModalHappyDesaturatedSource(theme) {
  return _mod8349.getIllustrationSource(theme, {
    dark() {
      return require("module_11772");
    },
    darker() {
      return require("module_11773");
    },
    light() {
      return require("module_11774");
    }
  });
};
export const useFeedbackModalHappyDesaturatedSource = function useFeedbackModalHappyDesaturatedSource() {
  const obj = shared;
  return _mod8349.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11772");
    },
    darker() {
      return require("module_11773");
    },
    light() {
      return require("module_11774");
    }
  });
};
export const FeedbackModalHappyDesaturated = function FeedbackModalHappyDesaturated(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8349.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11772");
    },
    darker() {
      return require("module_11773");
    },
    light() {
      return require("module_11774");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
