// Module ID: 17752
// Function ID: 17753
// Name: IntroHeader
// Dependencies: [19, 17, 21, 8296, 17753, 17754, 17755, 4456, 2]
// Exports: IntroHeader, getIntroHeaderSource, useIntroHeaderSource

// Module 17752 (IntroHeader)
import shared from "shared" /* 4456 */;
import _mod8296 from "module_8296" /* 8296 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export const getIntroHeaderSource = function getIntroHeaderSource(theme) {
  return _mod8296.getIllustrationSource(theme, {
    dark() {
      return require("module_17753");
    },
    darker() {
      return require("module_17754");
    },
    light() {
      return require("module_17755");
    }
  });
};
export const useIntroHeaderSource = function useIntroHeaderSource() {
  const obj = shared;
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17753");
    },
    darker() {
      return require("module_17754");
    },
    light() {
      return require("module_17755");
    }
  });
};
export const IntroHeader = function IntroHeader(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17753");
    },
    darker() {
      return require("module_17754");
    },
    light() {
      return require("module_17755");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
