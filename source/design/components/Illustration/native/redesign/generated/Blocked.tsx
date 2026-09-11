// Module ID: 14856
// Function ID: 14857
// Name: Blocked
// Dependencies: [19, 17, 21, 8317, 14857, 14858, 14859, 4458, 2]
// Exports: Blocked, getBlockedSource, useBlockedSource

// Module 14856 (Blocked)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export const getBlockedSource = function getBlockedSource(theme) {
  return _mod8317.getIllustrationSource(theme, {
    dark() {
      return require("module_14857");
    },
    darker() {
      return require("module_14858");
    },
    light() {
      return require("module_14859");
    }
  });
};
export const useBlockedSource = function useBlockedSource() {
  const obj = shared;
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_14857");
    },
    darker() {
      return require("module_14858");
    },
    light() {
      return require("module_14859");
    }
  });
};
export const Blocked = function Blocked(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_14857");
    },
    darker() {
      return require("module_14858");
    },
    light() {
      return require("module_14859");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
