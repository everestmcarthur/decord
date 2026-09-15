// Module ID: 17824
// Function ID: 17825
// Name: ChannelSetup
// Dependencies: [19, 17, 21, 8352, 17825, 17826, 17827, 4491, 2]
// Exports: ChannelSetup, getChannelSetupSource, useChannelSetupSource

// Module 17824 (ChannelSetup)
import shared from "shared" /* 4491 */;
import _mod8352 from "module_8352" /* 8352 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export const getChannelSetupSource = function getChannelSetupSource(theme) {
  return _mod8352.getIllustrationSource(theme, {
    dark() {
      return require("module_17825");
    },
    darker() {
      return require("module_17826");
    },
    light() {
      return require("module_17827");
    }
  });
};
export const useChannelSetupSource = function useChannelSetupSource() {
  const obj = shared;
  return _mod8352.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17825");
    },
    darker() {
      return require("module_17826");
    },
    light() {
      return require("module_17827");
    }
  });
};
export const ChannelSetup = function ChannelSetup(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8352.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17825");
    },
    darker() {
      return require("module_17826");
    },
    light() {
      return require("module_17827");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
