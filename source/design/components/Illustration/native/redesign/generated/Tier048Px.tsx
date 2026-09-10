// Module ID: 13584
// Function ID: 13585
// Name: Tier048Px
// Dependencies: [19, 17, 21, 8296, 13585, 13586, 13587, 4456, 2]
// Exports: Tier048Px, getTier048PxSource, useTier048PxSource

// Module 13584 (Tier048Px)
import shared from "shared" /* 4456 */;
import _mod8296 from "module_8296" /* 8296 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Tier048Px.tsx");

export const getTier048PxSource = function getTier048PxSource(theme) {
  return _mod8296.getIllustrationSource(theme, {
    dark() {
      return require("module_13585");
    },
    darker() {
      return require("module_13586");
    },
    light() {
      return require("module_13587");
    }
  });
};
export const useTier048PxSource = function useTier048PxSource() {
  const obj = shared;
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13585");
    },
    darker() {
      return require("module_13586");
    },
    light() {
      return require("module_13587");
    }
  });
};
export const Tier048Px = function Tier048Px(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13585");
    },
    darker() {
      return require("module_13586");
    },
    light() {
      return require("module_13587");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
