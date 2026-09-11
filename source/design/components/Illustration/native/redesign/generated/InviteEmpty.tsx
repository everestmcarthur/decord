// Module ID: 17733
// Function ID: 17734
// Name: InviteEmpty
// Dependencies: [19, 17, 21, 8317, 11042, 17734, 11041, 4458, 2]
// Exports: InviteEmpty, getInviteEmptySource, useInviteEmptySource

// Module 17733 (InviteEmpty)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InviteEmpty.tsx");

export const getInviteEmptySource = function getInviteEmptySource(theme) {
  return _mod8317.getIllustrationSource(theme, {
    dark() {
      return require("module_11042");
    },
    darker() {
      return require("module_17734");
    },
    light() {
      return require("module_11041");
    }
  });
};
export const useInviteEmptySource = function useInviteEmptySource() {
  const obj = shared;
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11042");
    },
    darker() {
      return require("module_17734");
    },
    light() {
      return require("module_11041");
    }
  });
};
export const InviteEmpty = function InviteEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11042");
    },
    darker() {
      return require("module_17734");
    },
    light() {
      return require("module_11041");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
