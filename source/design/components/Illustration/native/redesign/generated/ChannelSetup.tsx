// Module ID: 17705
// Function ID: 17706
// Name: ChannelSetup
// Dependencies: [19, 17, 21, 8259, 17706, 17707, 17708, 4425, 2]
// Exports: ChannelSetup, getChannelSetupSource, useChannelSetupSource

// Module 17705 (ChannelSetup)
import shared from "shared" /* 4425 */;
import _mod8259 from "module_8259" /* 8259 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export const getChannelSetupSource = function getChannelSetupSource(theme) {
  return _mod8259.getIllustrationSource(theme, {
    dark() {
      return require("module_17706");
    },
    darker() {
      return require("module_17707");
    },
    light() {
      return require("module_17708");
    }
  });
};
export const useChannelSetupSource = function useChannelSetupSource() {
  const obj = shared;
  return _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17706");
    },
    darker() {
      return require("module_17707");
    },
    light() {
      return require("module_17708");
    }
  });
};
export const ChannelSetup = function ChannelSetup(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17706");
    },
    darker() {
      return require("module_17707");
    },
    light() {
      return require("module_17708");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
