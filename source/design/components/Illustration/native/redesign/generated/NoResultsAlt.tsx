// Module ID: 9792
// Function ID: 9793
// Name: NoResultsAlt
// Dependencies: [19, 17, 21, 8259, 9793, 9794, 7068, 4425, 2]
// Exports: NoResultsAlt, getNoResultsAltSource, useNoResultsAltSource

// Module 9792 (NoResultsAlt)
import shared from "shared" /* 4425 */;
import _mod8259 from "module_8259" /* 8259 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResultsAlt.tsx");

export const getNoResultsAltSource = function getNoResultsAltSource(theme) {
  return _mod8259.getIllustrationSource(theme, {
    dark() {
      return require("module_9793");
    },
    darker() {
      return require("module_9794");
    },
    light() {
      return require("module_7068");
    }
  });
};
export const useNoResultsAltSource = function useNoResultsAltSource() {
  const obj = shared;
  return _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9793");
    },
    darker() {
      return require("module_9794");
    },
    light() {
      return require("module_7068");
    }
  });
};
export const NoResultsAlt = function NoResultsAlt(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9793");
    },
    darker() {
      return require("module_9794");
    },
    light() {
      return require("module_7068");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
