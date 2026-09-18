// Module ID: 9855
// Function ID: 9856
// Name: AppCrash
// Dependencies: [19, 17, 21, 8234, 9856, 9857, 9858, 4411, 2]
// Exports: AppCrash, getAppCrashSource, useAppCrashSource

// Module 9855 (AppCrash)
import shared from "shared" /* 4411 */;
import _mod8234 from "module_8234" /* 8234 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export const getAppCrashSource = function getAppCrashSource(theme) {
  return _mod8234.getIllustrationSource(theme, {
    dark() {
      return require("module_9856");
    },
    darker() {
      return require("module_9857");
    },
    light() {
      return require("module_9858");
    }
  });
};
export const useAppCrashSource = function useAppCrashSource() {
  const obj = shared;
  return _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9856");
    },
    darker() {
      return require("module_9857");
    },
    light() {
      return require("module_9858");
    }
  });
};
export const AppCrash = function AppCrash(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9856");
    },
    darker() {
      return require("module_9857");
    },
    light() {
      return require("module_9858");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
