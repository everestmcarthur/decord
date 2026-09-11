// Module ID: 13572
// Function ID: 13573
// Name: TopPattern
// Dependencies: [19, 17, 21, 8317, 13573, 13574, 13575, 4458, 2]
// Exports: TopPattern, getTopPatternSource, useTopPatternSource

// Module 13572 (TopPattern)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/TopPattern.tsx");

export const getTopPatternSource = function getTopPatternSource(theme) {
  return _mod8317.getIllustrationSource(theme, {
    dark() {
      return require("module_13573");
    },
    darker() {
      return require("module_13574");
    },
    light() {
      return require("module_13575");
    }
  });
};
export const useTopPatternSource = function useTopPatternSource() {
  const obj = shared;
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13573");
    },
    darker() {
      return require("module_13574");
    },
    light() {
      return require("module_13575");
    }
  });
};
export const TopPattern = function TopPattern(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13573");
    },
    darker() {
      return require("module_13574");
    },
    light() {
      return require("module_13575");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
