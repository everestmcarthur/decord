// Module ID: 9919
// Function ID: 9920
// Name: AppCrash
// Dependencies: [19, 17, 21, 8296, 9920, 9921, 9922, 4456, 2]
// Exports: AppCrash, getAppCrashSource, useAppCrashSource

// Module 9919 (AppCrash)
import shared from "shared" /* 4456 */;
import _mod8296 from "module_8296" /* 8296 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export const getAppCrashSource = function getAppCrashSource(theme) {
  return _mod8296.getIllustrationSource(theme, {
    dark() {
      return require("module_9920");
    },
    darker() {
      return require("module_9921");
    },
    light() {
      return require("module_9922");
    }
  });
};
export const useAppCrashSource = function useAppCrashSource() {
  const obj = shared;
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9920");
    },
    darker() {
      return require("module_9921");
    },
    light() {
      return require("module_9922");
    }
  });
};
export const AppCrash = function AppCrash(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9920");
    },
    darker() {
      return require("module_9921");
    },
    light() {
      return require("module_9922");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
