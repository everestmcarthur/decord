// Module ID: 17764
// Function ID: 17765
// Name: ChannelSetup
// Dependencies: [19, 17, 21, 8296, 17765, 17766, 17767, 4456, 2]
// Exports: ChannelSetup, getChannelSetupSource, useChannelSetupSource

// Module 17764 (ChannelSetup)
import shared from "shared" /* 4456 */;
import _mod8296 from "module_8296" /* 8296 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export const getChannelSetupSource = function getChannelSetupSource(theme) {
  return _mod8296.getIllustrationSource(theme, {
    dark() {
      return require("module_17765");
    },
    darker() {
      return require("module_17766");
    },
    light() {
      return require("module_17767");
    }
  });
};
export const useChannelSetupSource = function useChannelSetupSource() {
  const obj = shared;
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17765");
    },
    darker() {
      return require("module_17766");
    },
    light() {
      return require("module_17767");
    }
  });
};
export const ChannelSetup = function ChannelSetup(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17765");
    },
    darker() {
      return require("module_17766");
    },
    light() {
      return require("module_17767");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
