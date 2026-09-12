// Module ID: 11926
// Function ID: 11927
// Name: InvalidLink
// Dependencies: [19, 17, 21, 8349, 11587, 11927, 11588, 4488, 2]
// Exports: InvalidLink, getInvalidLinkSource, useInvalidLinkSource

// Module 11926 (InvalidLink)
import shared from "shared" /* 4488 */;
import _mod8349 from "module_8349" /* 8349 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InvalidLink.tsx");

export const getInvalidLinkSource = function getInvalidLinkSource(theme) {
  return _mod8349.getIllustrationSource(theme, {
    dark() {
      return require("module_11587");
    },
    darker() {
      return require("module_11927");
    },
    light() {
      return require("module_11588");
    }
  });
};
export const useInvalidLinkSource = function useInvalidLinkSource() {
  const obj = shared;
  return _mod8349.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11587");
    },
    darker() {
      return require("module_11927");
    },
    light() {
      return require("module_11588");
    }
  });
};
export const InvalidLink = function InvalidLink(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8349.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11587");
    },
    darker() {
      return require("module_11927");
    },
    light() {
      return require("module_11588");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
