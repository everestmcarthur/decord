// Module ID: 13523
// Function ID: 13524
// Name: TopPattern
// Dependencies: [19, 17, 21, 8234, 13524, 13525, 13526, 4411, 2]
// Exports: TopPattern, getTopPatternSource, useTopPatternSource

// Module 13523 (TopPattern)
import shared from "shared" /* 4411 */;
import _mod8234 from "module_8234" /* 8234 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/TopPattern.tsx");

export const getTopPatternSource = function getTopPatternSource(theme) {
  return _mod8234.getIllustrationSource(theme, {
    dark() {
      return require("module_13524");
    },
    darker() {
      return require("module_13525");
    },
    light() {
      return require("module_13526");
    }
  });
};
export const useTopPatternSource = function useTopPatternSource() {
  const obj = shared;
  return _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13524");
    },
    darker() {
      return require("module_13525");
    },
    light() {
      return require("module_13526");
    }
  });
};
export const TopPattern = function TopPattern(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13524");
    },
    darker() {
      return require("module_13525");
    },
    light() {
      return require("module_13526");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
