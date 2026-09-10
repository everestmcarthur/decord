// Module ID: 17544
// Function ID: 17545
// Name: generated/VerifyPhone
// Dependencies: [19, 17, 21, 8259, 17545, 17546, 17547, 4425, 2]
// Exports: VerifyPhone, getVerifyPhoneSource, useVerifyPhoneSource

// Module 17544 (generated/VerifyPhone)
import shared from "shared" /* 4425 */;
import _mod8259 from "module_8259" /* 8259 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/VerifyPhone.tsx");

export const getVerifyPhoneSource = function getVerifyPhoneSource(theme) {
  return _mod8259.getIllustrationSource(theme, {
    dark() {
      return require("module_17545");
    },
    darker() {
      return require("module_17546");
    },
    light() {
      return require("module_17547");
    }
  });
};
export const useVerifyPhoneSource = function useVerifyPhoneSource() {
  const obj = shared;
  return _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17545");
    },
    darker() {
      return require("module_17546");
    },
    light() {
      return require("module_17547");
    }
  });
};
export const VerifyPhone = function VerifyPhone(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17545");
    },
    darker() {
      return require("module_17546");
    },
    light() {
      return require("module_17547");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
