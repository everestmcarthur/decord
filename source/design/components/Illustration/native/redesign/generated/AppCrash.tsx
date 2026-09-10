// Module ID: 9881
// Function ID: 9882
// Name: AppCrash
// Dependencies: [19, 17, 21, 8259, 9882, 9883, 9884, 4425, 2]
// Exports: AppCrash, getAppCrashSource, useAppCrashSource

// Module 9881 (AppCrash)
import shared from "shared" /* 4425 */;
import _mod8259 from "module_8259" /* 8259 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export const getAppCrashSource = function getAppCrashSource(theme) {
  return _mod8259.getIllustrationSource(theme, {
    dark() {
      return require("module_9882");
    },
    darker() {
      return require("module_9883");
    },
    light() {
      return require("module_9884");
    }
  });
};
export const useAppCrashSource = function useAppCrashSource() {
  const obj = shared;
  return _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9882");
    },
    darker() {
      return require("module_9883");
    },
    light() {
      return require("module_9884");
    }
  });
};
export const AppCrash = function AppCrash(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9882");
    },
    darker() {
      return require("module_9883");
    },
    light() {
      return require("module_9884");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
