// Module ID: 13561
// Function ID: 13562
// Name: Tier048Px
// Dependencies: [19, 17, 21, 8317, 13562, 13563, 13564, 4458, 2]
// Exports: Tier048Px, getTier048PxSource, useTier048PxSource

// Module 13561 (Tier048Px)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Tier048Px.tsx");

export const getTier048PxSource = function getTier048PxSource(theme) {
  return _mod8317.getIllustrationSource(theme, {
    dark() {
      return require("module_13562");
    },
    darker() {
      return require("module_13563");
    },
    light() {
      return require("module_13564");
    }
  });
};
export const useTier048PxSource = function useTier048PxSource() {
  const obj = shared;
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13562");
    },
    darker() {
      return require("module_13563");
    },
    light() {
      return require("module_13564");
    }
  });
};
export const Tier048Px = function Tier048Px(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13562");
    },
    darker() {
      return require("module_13563");
    },
    light() {
      return require("module_13564");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
