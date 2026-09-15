// Module ID: 11931
// Function ID: 11932
// Name: InvalidLink
// Dependencies: [19, 17, 21, 8352, 11592, 11932, 11593, 4491, 2]
// Exports: InvalidLink, getInvalidLinkSource, useInvalidLinkSource

// Module 11931 (InvalidLink)
import shared from "shared" /* 4491 */;
import _mod8352 from "module_8352" /* 8352 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InvalidLink.tsx");

export const getInvalidLinkSource = function getInvalidLinkSource(theme) {
  return _mod8352.getIllustrationSource(theme, {
    dark() {
      return require("module_11592");
    },
    darker() {
      return require("module_11932");
    },
    light() {
      return require("module_11593");
    }
  });
};
export const useInvalidLinkSource = function useInvalidLinkSource() {
  const obj = shared;
  return _mod8352.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11592");
    },
    darker() {
      return require("module_11932");
    },
    light() {
      return require("module_11593");
    }
  });
};
export const InvalidLink = function InvalidLink(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8352.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11592");
    },
    darker() {
      return require("module_11932");
    },
    light() {
      return require("module_11593");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
