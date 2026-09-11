// Module ID: 17744
// Function ID: 17745
// Name: IntroHeader
// Dependencies: [19, 17, 21, 8319, 17745, 17746, 17747, 4458, 2]
// Exports: IntroHeader, getIntroHeaderSource, useIntroHeaderSource

// Module 17744 (IntroHeader)
import shared from "shared" /* 4458 */;
import _mod8319 from "module_8319" /* 8319 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export const getIntroHeaderSource = function getIntroHeaderSource(theme) {
  return _mod8319.getIllustrationSource(theme, {
    dark() {
      return require("module_17745");
    },
    darker() {
      return require("module_17746");
    },
    light() {
      return require("module_17747");
    }
  });
};
export const useIntroHeaderSource = function useIntroHeaderSource() {
  const obj = shared;
  return _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17745");
    },
    darker() {
      return require("module_17746");
    },
    light() {
      return require("module_17747");
    }
  });
};
export const IntroHeader = function IntroHeader(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17745");
    },
    darker() {
      return require("module_17746");
    },
    light() {
      return require("module_17747");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
