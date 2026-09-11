// Module ID: 11892
// Function ID: 11893
// Name: InvalidLink
// Dependencies: [19, 17, 21, 8319, 11550, 11893, 11551, 4458, 2]
// Exports: InvalidLink, getInvalidLinkSource, useInvalidLinkSource

// Module 11892 (InvalidLink)
import shared from "shared" /* 4458 */;
import _mod8319 from "module_8319" /* 8319 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InvalidLink.tsx");

export const getInvalidLinkSource = function getInvalidLinkSource(theme) {
  return _mod8319.getIllustrationSource(theme, {
    dark() {
      return require("module_11550");
    },
    darker() {
      return require("module_11893");
    },
    light() {
      return require("module_11551");
    }
  });
};
export const useInvalidLinkSource = function useInvalidLinkSource() {
  const obj = shared;
  return _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11550");
    },
    darker() {
      return require("module_11893");
    },
    light() {
      return require("module_11551");
    }
  });
};
export const InvalidLink = function InvalidLink(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11550");
    },
    darker() {
      return require("module_11893");
    },
    light() {
      return require("module_11551");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
