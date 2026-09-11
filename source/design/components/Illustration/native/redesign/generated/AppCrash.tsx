// Module ID: 9940
// Function ID: 9941
// Name: AppCrash
// Dependencies: [19, 17, 21, 8317, 9941, 9942, 9943, 4458, 2]
// Exports: AppCrash, getAppCrashSource, useAppCrashSource

// Module 9940 (AppCrash)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export const getAppCrashSource = function getAppCrashSource(theme) {
  return _mod8317.getIllustrationSource(theme, {
    dark() {
      return require("module_9941");
    },
    darker() {
      return require("module_9942");
    },
    light() {
      return require("module_9943");
    }
  });
};
export const useAppCrashSource = function useAppCrashSource() {
  const obj = shared;
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9941");
    },
    darker() {
      return require("module_9942");
    },
    light() {
      return require("module_9943");
    }
  });
};
export const AppCrash = function AppCrash(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9941");
    },
    darker() {
      return require("module_9942");
    },
    light() {
      return require("module_9943");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
