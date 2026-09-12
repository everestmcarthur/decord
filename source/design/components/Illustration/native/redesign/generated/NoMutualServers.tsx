// Module ID: 12733
// Function ID: 12734
// Name: NoMutualServers
// Dependencies: [19, 17, 21, 8349, 12734, 12735, 12736, 4488, 2]
// Exports: NoMutualServers, getNoMutualServersSource, useNoMutualServersSource

// Module 12733 (NoMutualServers)
import shared from "shared" /* 4488 */;
import _mod8349 from "module_8349" /* 8349 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualServers.tsx");

export const getNoMutualServersSource = function getNoMutualServersSource(theme) {
  return _mod8349.getIllustrationSource(theme, {
    dark() {
      return require("module_12734");
    },
    darker() {
      return require("module_12735");
    },
    light() {
      return require("module_12736");
    }
  });
};
export const useNoMutualServersSource = function useNoMutualServersSource() {
  const obj = shared;
  return _mod8349.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_12734");
    },
    darker() {
      return require("module_12735");
    },
    light() {
      return require("module_12736");
    }
  });
};
export const NoMutualServers = function NoMutualServers(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8349.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_12734");
    },
    darker() {
      return require("module_12735");
    },
    light() {
      return require("module_12736");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
