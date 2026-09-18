// Module ID: 13507
// Function ID: 13508
// Name: SubscriptionPlaceholderPattern
// Dependencies: [19, 17, 21, 8234, 13508, 13509, 13510, 4411, 2]
// Exports: SubscriptionPlaceholderPattern, getSubscriptionPlaceholderPatternSource, useSubscriptionPlaceholderPatternSource

// Module 13507 (SubscriptionPlaceholderPattern)
import shared from "shared" /* 4411 */;
import _mod8234 from "module_8234" /* 8234 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/SubscriptionPlaceholderPattern.tsx");

export const getSubscriptionPlaceholderPatternSource = function getSubscriptionPlaceholderPatternSource(theme) {
  return _mod8234.getIllustrationSource(theme, {
    dark() {
      return require("module_13508");
    },
    darker() {
      return require("module_13509");
    },
    light() {
      return require("module_13510");
    }
  });
};
export const useSubscriptionPlaceholderPatternSource = function useSubscriptionPlaceholderPatternSource() {
  const obj = shared;
  return _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13508");
    },
    darker() {
      return require("module_13509");
    },
    light() {
      return require("module_13510");
    }
  });
};
export const SubscriptionPlaceholderPattern = function SubscriptionPlaceholderPattern(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13508");
    },
    darker() {
      return require("module_13509");
    },
    light() {
      return require("module_13510");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
