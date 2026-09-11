// Module ID: 13563
// Function ID: 13564
// Name: Tier048Px
// Dependencies: [19, 17, 21, 8319, 13564, 13565, 13566, 4458, 2]
// Exports: Tier048Px, getTier048PxSource, useTier048PxSource

// Module 13563 (Tier048Px)
import shared from "shared" /* 4458 */;
import _mod8319 from "module_8319" /* 8319 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Tier048Px.tsx");

export const getTier048PxSource = function getTier048PxSource(theme) {
  return _mod8319.getIllustrationSource(theme, {
    dark() {
      return require("module_13564");
    },
    darker() {
      return require("module_13565");
    },
    light() {
      return require("module_13566");
    }
  });
};
export const useTier048PxSource = function useTier048PxSource() {
  const obj = shared;
  return _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13564");
    },
    darker() {
      return require("module_13565");
    },
    light() {
      return require("module_13566");
    }
  });
};
export const Tier048Px = function Tier048Px(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13564");
    },
    darker() {
      return require("module_13565");
    },
    light() {
      return require("module_13566");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
