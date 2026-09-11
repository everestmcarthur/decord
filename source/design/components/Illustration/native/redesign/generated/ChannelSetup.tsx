// Module ID: 17755
// Function ID: 17756
// Name: ChannelSetup
// Dependencies: [19, 17, 21, 8317, 17756, 17757, 17758, 4458, 2]
// Exports: ChannelSetup, getChannelSetupSource, useChannelSetupSource

// Module 17755 (ChannelSetup)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export const getChannelSetupSource = function getChannelSetupSource(theme) {
  return _mod8317.getIllustrationSource(theme, {
    dark() {
      return require("module_17756");
    },
    darker() {
      return require("module_17757");
    },
    light() {
      return require("module_17758");
    }
  });
};
export const useChannelSetupSource = function useChannelSetupSource() {
  const obj = shared;
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17756");
    },
    darker() {
      return require("module_17757");
    },
    light() {
      return require("module_17758");
    }
  });
};
export const ChannelSetup = function ChannelSetup(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17756");
    },
    darker() {
      return require("module_17757");
    },
    light() {
      return require("module_17758");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
