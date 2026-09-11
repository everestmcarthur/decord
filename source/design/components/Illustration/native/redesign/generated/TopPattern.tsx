// Module ID: 13574
// Function ID: 13575
// Name: TopPattern
// Dependencies: [19, 17, 21, 8319, 13575, 13576, 13577, 4458, 2]
// Exports: TopPattern, getTopPatternSource, useTopPatternSource

// Module 13574 (TopPattern)
import shared from "shared" /* 4458 */;
import _mod8319 from "module_8319" /* 8319 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/TopPattern.tsx");

export const getTopPatternSource = function getTopPatternSource(theme) {
  return _mod8319.getIllustrationSource(theme, {
    dark() {
      return require("module_13575");
    },
    darker() {
      return require("module_13576");
    },
    light() {
      return require("module_13577");
    }
  });
};
export const useTopPatternSource = function useTopPatternSource() {
  const obj = shared;
  return _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13575");
    },
    darker() {
      return require("module_13576");
    },
    light() {
      return require("module_13577");
    }
  });
};
export const TopPattern = function TopPattern(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13575");
    },
    darker() {
      return require("module_13576");
    },
    light() {
      return require("module_13577");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
