// Module ID: 13558
// Function ID: 13559
// Name: SubscriptionPlaceholderPattern
// Dependencies: [19, 17, 21, 8319, 13559, 13560, 13561, 4458, 2]
// Exports: SubscriptionPlaceholderPattern, getSubscriptionPlaceholderPatternSource, useSubscriptionPlaceholderPatternSource

// Module 13558 (SubscriptionPlaceholderPattern)
import shared from "shared" /* 4458 */;
import _mod8319 from "module_8319" /* 8319 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/SubscriptionPlaceholderPattern.tsx");

export const getSubscriptionPlaceholderPatternSource = function getSubscriptionPlaceholderPatternSource(theme) {
  return _mod8319.getIllustrationSource(theme, {
    dark() {
      return require("module_13559");
    },
    darker() {
      return require("module_13560");
    },
    light() {
      return require("module_13561");
    }
  });
};
export const useSubscriptionPlaceholderPatternSource = function useSubscriptionPlaceholderPatternSource() {
  const obj = shared;
  return _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13559");
    },
    darker() {
      return require("module_13560");
    },
    light() {
      return require("module_13561");
    }
  });
};
export const SubscriptionPlaceholderPattern = function SubscriptionPlaceholderPattern(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13559");
    },
    darker() {
      return require("module_13560");
    },
    light() {
      return require("module_13561");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
