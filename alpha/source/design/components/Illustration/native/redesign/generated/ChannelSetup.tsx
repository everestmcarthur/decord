// Module ID: 18094
// Function ID: 18095
// Name: ChannelSetup
// Dependencies: [19, 17, 21, 8501, 18095, 18096, 18097, 4607, 2]
// Exports: ChannelSetup, getChannelSetupSource, useChannelSetupSource

// Module 18094 (ChannelSetup)
import shared from "shared" /* 4607 */;
import _mod8501 from "module_8501" /* 8501 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export const getChannelSetupSource = function getChannelSetupSource(theme) {
  return _mod8501.getIllustrationSource(theme, {
    dark() {
      return require("module_18095");
    },
    darker() {
      return require("module_18096");
    },
    light() {
      return require("module_18097");
    }
  });
};
export const useChannelSetupSource = function useChannelSetupSource() {
  const obj = shared;
  return _mod8501.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_18095");
    },
    darker() {
      return require("module_18096");
    },
    light() {
      return require("module_18097");
    }
  });
};
export const ChannelSetup = function ChannelSetup(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8501.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_18095");
    },
    darker() {
      return require("module_18096");
    },
    light() {
      return require("module_18097");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
