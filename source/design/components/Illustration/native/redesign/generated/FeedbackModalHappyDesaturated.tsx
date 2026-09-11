// Module ID: 11737
// Function ID: 11738
// Name: FeedbackModalHappyDesaturated
// Dependencies: [19, 17, 21, 8319, 11738, 11739, 11740, 4458, 2]
// Exports: FeedbackModalHappyDesaturated, getFeedbackModalHappyDesaturatedSource, useFeedbackModalHappyDesaturatedSource

// Module 11737 (FeedbackModalHappyDesaturated)
import shared from "shared" /* 4458 */;
import _mod8319 from "module_8319" /* 8319 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalHappyDesaturated.tsx");

export const getFeedbackModalHappyDesaturatedSource = function getFeedbackModalHappyDesaturatedSource(theme) {
  return _mod8319.getIllustrationSource(theme, {
    dark() {
      return require("module_11738");
    },
    darker() {
      return require("module_11739");
    },
    light() {
      return require("module_11740");
    }
  });
};
export const useFeedbackModalHappyDesaturatedSource = function useFeedbackModalHappyDesaturatedSource() {
  const obj = shared;
  return _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11738");
    },
    darker() {
      return require("module_11739");
    },
    light() {
      return require("module_11740");
    }
  });
};
export const FeedbackModalHappyDesaturated = function FeedbackModalHappyDesaturated(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11738");
    },
    darker() {
      return require("module_11739");
    },
    light() {
      return require("module_11740");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
