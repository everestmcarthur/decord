// Module ID: 17672
// Function ID: 17673
// Name: ChannelSetup
// Dependencies: [19, 17, 21, 8234, 17673, 17674, 17675, 4411, 2]
// Exports: ChannelSetup, getChannelSetupSource, useChannelSetupSource

// Module 17672 (ChannelSetup)
import shared from "shared" /* 4411 */;
import _mod8234 from "module_8234" /* 8234 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export const getChannelSetupSource = function getChannelSetupSource(theme) {
  return _mod8234.getIllustrationSource(theme, {
    dark() {
      return require("module_17673");
    },
    darker() {
      return require("module_17674");
    },
    light() {
      return require("module_17675");
    }
  });
};
export const useChannelSetupSource = function useChannelSetupSource() {
  const obj = shared;
  return _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17673");
    },
    darker() {
      return require("module_17674");
    },
    light() {
      return require("module_17675");
    }
  });
};
export const ChannelSetup = function ChannelSetup(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17673");
    },
    darker() {
      return require("module_17674");
    },
    light() {
      return require("module_17675");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
