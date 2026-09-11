// Module ID: 12697
// Function ID: 12698
// Name: NoMutualServers
// Dependencies: [19, 17, 21, 8317, 12698, 12699, 12700, 4458, 2]
// Exports: NoMutualServers, getNoMutualServersSource, useNoMutualServersSource

// Module 12697 (NoMutualServers)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualServers.tsx");

export const getNoMutualServersSource = function getNoMutualServersSource(theme) {
  return _mod8317.getIllustrationSource(theme, {
    dark() {
      return require("module_12698");
    },
    darker() {
      return require("module_12699");
    },
    light() {
      return require("module_12700");
    }
  });
};
export const useNoMutualServersSource = function useNoMutualServersSource() {
  const obj = shared;
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_12698");
    },
    darker() {
      return require("module_12699");
    },
    light() {
      return require("module_12700");
    }
  });
};
export const NoMutualServers = function NoMutualServers(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_12698");
    },
    darker() {
      return require("module_12699");
    },
    light() {
      return require("module_12700");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
