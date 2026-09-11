// Module ID: 17756
// Function ID: 17757
// Name: ChannelSetup
// Dependencies: [19, 17, 21, 8319, 17757, 17758, 17759, 4458, 2]
// Exports: ChannelSetup, getChannelSetupSource, useChannelSetupSource

// Module 17756 (ChannelSetup)
import shared from "shared" /* 4458 */;
import _mod8319 from "module_8319" /* 8319 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export const getChannelSetupSource = function getChannelSetupSource(theme) {
  return _mod8319.getIllustrationSource(theme, {
    dark() {
      return require("module_17757");
    },
    darker() {
      return require("module_17758");
    },
    light() {
      return require("module_17759");
    }
  });
};
export const useChannelSetupSource = function useChannelSetupSource() {
  const obj = shared;
  return _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17757");
    },
    darker() {
      return require("module_17758");
    },
    light() {
      return require("module_17759");
    }
  });
};
export const ChannelSetup = function ChannelSetup(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17757");
    },
    darker() {
      return require("module_17758");
    },
    light() {
      return require("module_17759");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
