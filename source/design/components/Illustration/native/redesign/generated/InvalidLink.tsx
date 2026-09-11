// Module ID: 11890
// Function ID: 11891
// Name: InvalidLink
// Dependencies: [19, 17, 21, 8317, 11548, 11891, 11549, 4458, 2]
// Exports: InvalidLink, getInvalidLinkSource, useInvalidLinkSource

// Module 11890 (InvalidLink)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InvalidLink.tsx");

export const getInvalidLinkSource = function getInvalidLinkSource(theme) {
  return _mod8317.getIllustrationSource(theme, {
    dark() {
      return require("module_11548");
    },
    darker() {
      return require("module_11891");
    },
    light() {
      return require("module_11549");
    }
  });
};
export const useInvalidLinkSource = function useInvalidLinkSource() {
  const obj = shared;
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11548");
    },
    darker() {
      return require("module_11891");
    },
    light() {
      return require("module_11549");
    }
  });
};
export const InvalidLink = function InvalidLink(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11548");
    },
    darker() {
      return require("module_11891");
    },
    light() {
      return require("module_11549");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
