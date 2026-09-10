// Module ID: 17603
// Function ID: 17604
// Name: generated/VerifyPhone
// Dependencies: [19, 17, 21, 8296, 17604, 17605, 17606, 4456, 2]
// Exports: VerifyPhone, getVerifyPhoneSource, useVerifyPhoneSource

// Module 17603 (generated/VerifyPhone)
import shared from "shared" /* 4456 */;
import _mod8296 from "module_8296" /* 8296 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/VerifyPhone.tsx");

export const getVerifyPhoneSource = function getVerifyPhoneSource(theme) {
  return _mod8296.getIllustrationSource(theme, {
    dark() {
      return require("module_17604");
    },
    darker() {
      return require("module_17605");
    },
    light() {
      return require("module_17606");
    }
  });
};
export const useVerifyPhoneSource = function useVerifyPhoneSource() {
  const obj = shared;
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17604");
    },
    darker() {
      return require("module_17605");
    },
    light() {
      return require("module_17606");
    }
  });
};
export const VerifyPhone = function VerifyPhone(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17604");
    },
    darker() {
      return require("module_17605");
    },
    light() {
      return require("module_17606");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
