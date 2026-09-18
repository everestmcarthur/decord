// Module ID: 10094
// Function ID: 10095
// Name: AppCrash
// Dependencies: [19, 17, 21, 8463, 10095, 10096, 10097, 4573, 2]
// Exports: AppCrash, getAppCrashSource, useAppCrashSource

// Module 10094 (AppCrash)
import shared from "shared" /* 4573 */;
import _mod8463 from "module_8463" /* 8463 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export const getAppCrashSource = function getAppCrashSource(theme) {
  return _mod8463.getIllustrationSource(theme, {
    dark() {
      return require("module_10095");
    },
    darker() {
      return require("module_10096");
    },
    light() {
      return require("module_10097");
    }
  });
};
export const useAppCrashSource = function useAppCrashSource() {
  const obj = shared;
  return _mod8463.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10095");
    },
    darker() {
      return require("module_10096");
    },
    light() {
      return require("module_10097");
    }
  });
};
export const AppCrash = function AppCrash(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8463.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10095");
    },
    darker() {
      return require("module_10096");
    },
    light() {
      return require("module_10097");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
