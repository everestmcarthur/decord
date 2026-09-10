// Module ID: 13546
// Function ID: 13547
// Name: TopPattern
// Dependencies: [19, 17, 21, 8259, 13547, 13548, 13549, 4425, 2]
// Exports: TopPattern, getTopPatternSource, useTopPatternSource

// Module 13546 (TopPattern)
import shared from "shared" /* 4425 */;
import _mod8259 from "module_8259" /* 8259 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/TopPattern.tsx");

export const getTopPatternSource = function getTopPatternSource(theme) {
  return _mod8259.getIllustrationSource(theme, {
    dark() {
      return require("module_13547");
    },
    darker() {
      return require("module_13548");
    },
    light() {
      return require("module_13549");
    }
  });
};
export const useTopPatternSource = function useTopPatternSource() {
  const obj = shared;
  return _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13547");
    },
    darker() {
      return require("module_13548");
    },
    light() {
      return require("module_13549");
    }
  });
};
export const TopPattern = function TopPattern(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13547");
    },
    darker() {
      return require("module_13548");
    },
    light() {
      return require("module_13549");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
