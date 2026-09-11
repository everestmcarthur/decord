// Module ID: 17594
// Function ID: 17595
// Name: generated/VerifyPhone
// Dependencies: [19, 17, 21, 8317, 17595, 17596, 17597, 4458, 2]
// Exports: VerifyPhone, getVerifyPhoneSource, useVerifyPhoneSource

// Module 17594 (generated/VerifyPhone)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/VerifyPhone.tsx");

export const getVerifyPhoneSource = function getVerifyPhoneSource(theme) {
  return _mod8317.getIllustrationSource(theme, {
    dark() {
      return require("module_17595");
    },
    darker() {
      return require("module_17596");
    },
    light() {
      return require("module_17597");
    }
  });
};
export const useVerifyPhoneSource = function useVerifyPhoneSource() {
  const obj = shared;
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17595");
    },
    darker() {
      return require("module_17596");
    },
    light() {
      return require("module_17597");
    }
  });
};
export const VerifyPhone = function VerifyPhone(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17595");
    },
    darker() {
      return require("module_17596");
    },
    light() {
      return require("module_17597");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
