// Module ID: 11801
// Function ID: 11802
// Name: InvalidLink
// Dependencies: [19, 17, 21, 8234, 11459, 11802, 11460, 4411, 2]
// Exports: InvalidLink, getInvalidLinkSource, useInvalidLinkSource

// Module 11801 (InvalidLink)
import shared from "shared" /* 4411 */;
import _mod8234 from "module_8234" /* 8234 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InvalidLink.tsx");

export const getInvalidLinkSource = function getInvalidLinkSource(theme) {
  return _mod8234.getIllustrationSource(theme, {
    dark() {
      return require("module_11459");
    },
    darker() {
      return require("module_11802");
    },
    light() {
      return require("module_11460");
    }
  });
};
export const useInvalidLinkSource = function useInvalidLinkSource() {
  const obj = shared;
  return _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11459");
    },
    darker() {
      return require("module_11802");
    },
    light() {
      return require("module_11460");
    }
  });
};
export const InvalidLink = function InvalidLink(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11459");
    },
    darker() {
      return require("module_11802");
    },
    light() {
      return require("module_11460");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
