// Module ID: 17693
// Function ID: 17694
// Name: IntroHeader
// Dependencies: [19, 17, 21, 8259, 17694, 17695, 17696, 4425, 2]
// Exports: IntroHeader, getIntroHeaderSource, useIntroHeaderSource

// Module 17693 (IntroHeader)
import shared from "shared" /* 4425 */;
import _mod8259 from "module_8259" /* 8259 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export const getIntroHeaderSource = function getIntroHeaderSource(theme) {
  return _mod8259.getIllustrationSource(theme, {
    dark() {
      return require("module_17694");
    },
    darker() {
      return require("module_17695");
    },
    light() {
      return require("module_17696");
    }
  });
};
export const useIntroHeaderSource = function useIntroHeaderSource() {
  const obj = shared;
  return _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17694");
    },
    darker() {
      return require("module_17695");
    },
    light() {
      return require("module_17696");
    }
  });
};
export const IntroHeader = function IntroHeader(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17694");
    },
    darker() {
      return require("module_17695");
    },
    light() {
      return require("module_17696");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
