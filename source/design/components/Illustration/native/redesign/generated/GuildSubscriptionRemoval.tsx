// Module ID: 13644
// Function ID: 13645
// Name: GuildSubscriptionRemoval
// Dependencies: [19, 17, 21, 8259, 13645, 13646, 13647, 4425, 2]
// Exports: GuildSubscriptionRemoval, getGuildSubscriptionRemovalSource, useGuildSubscriptionRemovalSource

// Module 13644 (GuildSubscriptionRemoval)
import shared from "shared" /* 4425 */;
import _mod8259 from "module_8259" /* 8259 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionRemoval.tsx");

export const getGuildSubscriptionRemovalSource = function getGuildSubscriptionRemovalSource(theme) {
  return _mod8259.getIllustrationSource(theme, {
    dark() {
      return require("module_13645");
    },
    darker() {
      return require("module_13646");
    },
    light() {
      return require("module_13647");
    }
  });
};
export const useGuildSubscriptionRemovalSource = function useGuildSubscriptionRemovalSource() {
  const obj = shared;
  return _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13645");
    },
    darker() {
      return require("module_13646");
    },
    light() {
      return require("module_13647");
    }
  });
};
export const GuildSubscriptionRemoval = function GuildSubscriptionRemoval(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13645");
    },
    darker() {
      return require("module_13646");
    },
    light() {
      return require("module_13647");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
