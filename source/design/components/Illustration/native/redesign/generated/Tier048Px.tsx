// Module ID: 13535
// Function ID: 13536
// Name: Tier048Px
// Dependencies: [19, 17, 21, 8259, 13536, 13537, 13538, 4425, 2]
// Exports: Tier048Px, getTier048PxSource, useTier048PxSource

// Module 13535 (Tier048Px)
import shared from "shared" /* 4425 */;
import _mod8259 from "module_8259" /* 8259 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Tier048Px.tsx");

export const getTier048PxSource = function getTier048PxSource(theme) {
  return _mod8259.getIllustrationSource(theme, {
    dark() {
      return require("module_13536");
    },
    darker() {
      return require("module_13537");
    },
    light() {
      return require("module_13538");
    }
  });
};
export const useTier048PxSource = function useTier048PxSource() {
  const obj = shared;
  return _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13536");
    },
    darker() {
      return require("module_13537");
    },
    light() {
      return require("module_13538");
    }
  });
};
export const Tier048Px = function Tier048Px(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13536");
    },
    darker() {
      return require("module_13537");
    },
    light() {
      return require("module_13538");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
