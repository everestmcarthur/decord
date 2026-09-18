// Module ID: 17660
// Function ID: 17661
// Name: IntroHeader
// Dependencies: [19, 17, 21, 8234, 17661, 17662, 17663, 4411, 2]
// Exports: IntroHeader, getIntroHeaderSource, useIntroHeaderSource

// Module 17660 (IntroHeader)
import shared from "shared" /* 4411 */;
import _mod8234 from "module_8234" /* 8234 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export const getIntroHeaderSource = function getIntroHeaderSource(theme) {
  return _mod8234.getIllustrationSource(theme, {
    dark() {
      return require("module_17661");
    },
    darker() {
      return require("module_17662");
    },
    light() {
      return require("module_17663");
    }
  });
};
export const useIntroHeaderSource = function useIntroHeaderSource() {
  const obj = shared;
  return _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17661");
    },
    darker() {
      return require("module_17662");
    },
    light() {
      return require("module_17663");
    }
  });
};
export const IntroHeader = function IntroHeader(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17661");
    },
    darker() {
      return require("module_17662");
    },
    light() {
      return require("module_17663");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
