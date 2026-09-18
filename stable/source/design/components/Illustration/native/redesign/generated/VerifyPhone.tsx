// Module ID: 17513
// Function ID: 17514
// Name: generated/VerifyPhone
// Dependencies: [19, 17, 21, 8234, 17514, 17515, 17516, 4411, 2]
// Exports: VerifyPhone, getVerifyPhoneSource, useVerifyPhoneSource

// Module 17513 (generated/VerifyPhone)
import shared from "shared" /* 4411 */;
import _mod8234 from "module_8234" /* 8234 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/VerifyPhone.tsx");

export const getVerifyPhoneSource = function getVerifyPhoneSource(theme) {
  return _mod8234.getIllustrationSource(theme, {
    dark() {
      return require("module_17514");
    },
    darker() {
      return require("module_17515");
    },
    light() {
      return require("module_17516");
    }
  });
};
export const useVerifyPhoneSource = function useVerifyPhoneSource() {
  const obj = shared;
  return _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17514");
    },
    darker() {
      return require("module_17515");
    },
    light() {
      return require("module_17516");
    }
  });
};
export const VerifyPhone = function VerifyPhone(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17514");
    },
    darker() {
      return require("module_17515");
    },
    light() {
      return require("module_17516");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
