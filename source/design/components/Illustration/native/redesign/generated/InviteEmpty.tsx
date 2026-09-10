// Module ID: 17683
// Function ID: 17684
// Name: InviteEmpty
// Dependencies: [19, 17, 21, 8259, 10982, 17684, 10981, 4425, 2]
// Exports: InviteEmpty, getInviteEmptySource, useInviteEmptySource

// Module 17683 (InviteEmpty)
import shared from "shared" /* 4425 */;
import _mod8259 from "module_8259" /* 8259 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InviteEmpty.tsx");

export const getInviteEmptySource = function getInviteEmptySource(theme) {
  return _mod8259.getIllustrationSource(theme, {
    dark() {
      return require("module_10982");
    },
    darker() {
      return require("module_17684");
    },
    light() {
      return require("module_10981");
    }
  });
};
export const useInviteEmptySource = function useInviteEmptySource() {
  const obj = shared;
  return _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10982");
    },
    darker() {
      return require("module_17684");
    },
    light() {
      return require("module_10981");
    }
  });
};
export const InviteEmpty = function InviteEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10982");
    },
    darker() {
      return require("module_17684");
    },
    light() {
      return require("module_10981");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
