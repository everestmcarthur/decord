// Module ID: 11867
// Function ID: 11868
// Name: InvalidLink
// Dependencies: [19, 17, 21, 8296, 11526, 11868, 11527, 4456, 2]
// Exports: InvalidLink, getInvalidLinkSource, useInvalidLinkSource

// Module 11867 (InvalidLink)
import shared from "shared" /* 4456 */;
import _mod8296 from "module_8296" /* 8296 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InvalidLink.tsx");

export const getInvalidLinkSource = function getInvalidLinkSource(theme) {
  return _mod8296.getIllustrationSource(theme, {
    dark() {
      return require("module_11526");
    },
    darker() {
      return require("module_11868");
    },
    light() {
      return require("module_11527");
    }
  });
};
export const useInvalidLinkSource = function useInvalidLinkSource() {
  const obj = shared;
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11526");
    },
    darker() {
      return require("module_11868");
    },
    light() {
      return require("module_11527");
    }
  });
};
export const InvalidLink = function InvalidLink(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11526");
    },
    darker() {
      return require("module_11868");
    },
    light() {
      return require("module_11527");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
