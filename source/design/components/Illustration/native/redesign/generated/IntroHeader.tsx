// Module ID: 17773
// Function ID: 17774
// Name: IntroHeader
// Dependencies: [19, 17, 21, 8349, 17774, 17775, 17776, 4488, 2]
// Exports: IntroHeader, getIntroHeaderSource, useIntroHeaderSource

// Module 17773 (IntroHeader)
import shared from "shared" /* 4488 */;
import _mod8349 from "module_8349" /* 8349 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export const getIntroHeaderSource = function getIntroHeaderSource(theme) {
  return _mod8349.getIllustrationSource(theme, {
    dark() {
      return require("module_17774");
    },
    darker() {
      return require("module_17775");
    },
    light() {
      return require("module_17776");
    }
  });
};
export const useIntroHeaderSource = function useIntroHeaderSource() {
  const obj = shared;
  return _mod8349.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17774");
    },
    darker() {
      return require("module_17775");
    },
    light() {
      return require("module_17776");
    }
  });
};
export const IntroHeader = function IntroHeader(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8349.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17774");
    },
    darker() {
      return require("module_17775");
    },
    light() {
      return require("module_17776");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
