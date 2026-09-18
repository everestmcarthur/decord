// Module ID: 12608
// Function ID: 12609
// Name: NoMutualServers
// Dependencies: [19, 17, 21, 8234, 12609, 12610, 12611, 4411, 2]
// Exports: NoMutualServers, getNoMutualServersSource, useNoMutualServersSource

// Module 12608 (NoMutualServers)
import shared from "shared" /* 4411 */;
import _mod8234 from "module_8234" /* 8234 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualServers.tsx");

export const getNoMutualServersSource = function getNoMutualServersSource(theme) {
  return _mod8234.getIllustrationSource(theme, {
    dark() {
      return require("module_12609");
    },
    darker() {
      return require("module_12610");
    },
    light() {
      return require("module_12611");
    }
  });
};
export const useNoMutualServersSource = function useNoMutualServersSource() {
  const obj = shared;
  return _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_12609");
    },
    darker() {
      return require("module_12610");
    },
    light() {
      return require("module_12611");
    }
  });
};
export const NoMutualServers = function NoMutualServers(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_12609");
    },
    darker() {
      return require("module_12610");
    },
    light() {
      return require("module_12611");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
