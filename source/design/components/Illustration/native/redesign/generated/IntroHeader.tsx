// Module ID: 17743
// Function ID: 17744
// Name: IntroHeader
// Dependencies: [19, 17, 21, 8317, 17744, 17745, 17746, 4458, 2]
// Exports: IntroHeader, getIntroHeaderSource, useIntroHeaderSource

// Module 17743 (IntroHeader)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export const getIntroHeaderSource = function getIntroHeaderSource(theme) {
  return _mod8317.getIllustrationSource(theme, {
    dark() {
      return require("module_17744");
    },
    darker() {
      return require("module_17745");
    },
    light() {
      return require("module_17746");
    }
  });
};
export const useIntroHeaderSource = function useIntroHeaderSource() {
  const obj = shared;
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17744");
    },
    darker() {
      return require("module_17745");
    },
    light() {
      return require("module_17746");
    }
  });
};
export const IntroHeader = function IntroHeader(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17744");
    },
    darker() {
      return require("module_17745");
    },
    light() {
      return require("module_17746");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
