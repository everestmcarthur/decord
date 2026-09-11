// Module ID: 17595
// Function ID: 17596
// Name: generated/VerifyPhone
// Dependencies: [19, 17, 21, 8319, 17596, 17597, 17598, 4458, 2]
// Exports: VerifyPhone, getVerifyPhoneSource, useVerifyPhoneSource

// Module 17595 (generated/VerifyPhone)
import shared from "shared" /* 4458 */;
import _mod8319 from "module_8319" /* 8319 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/VerifyPhone.tsx");

export const getVerifyPhoneSource = function getVerifyPhoneSource(theme) {
  return _mod8319.getIllustrationSource(theme, {
    dark() {
      return require("module_17596");
    },
    darker() {
      return require("module_17597");
    },
    light() {
      return require("module_17598");
    }
  });
};
export const useVerifyPhoneSource = function useVerifyPhoneSource() {
  const obj = shared;
  return _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17596");
    },
    darker() {
      return require("module_17597");
    },
    light() {
      return require("module_17598");
    }
  });
};
export const VerifyPhone = function VerifyPhone(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17596");
    },
    darker() {
      return require("module_17597");
    },
    light() {
      return require("module_17598");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
