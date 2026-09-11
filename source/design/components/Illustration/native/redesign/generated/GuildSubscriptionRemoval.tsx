// Module ID: 13674
// Function ID: 13675
// Name: GuildSubscriptionRemoval
// Dependencies: [19, 17, 21, 8319, 13675, 13676, 13677, 4458, 2]
// Exports: GuildSubscriptionRemoval, getGuildSubscriptionRemovalSource, useGuildSubscriptionRemovalSource

// Module 13674 (GuildSubscriptionRemoval)
import shared from "shared" /* 4458 */;
import _mod8319 from "module_8319" /* 8319 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionRemoval.tsx");

export const getGuildSubscriptionRemovalSource = function getGuildSubscriptionRemovalSource(theme) {
  return _mod8319.getIllustrationSource(theme, {
    dark() {
      return require("module_13675");
    },
    darker() {
      return require("module_13676");
    },
    light() {
      return require("module_13677");
    }
  });
};
export const useGuildSubscriptionRemovalSource = function useGuildSubscriptionRemovalSource() {
  const obj = shared;
  return _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13675");
    },
    darker() {
      return require("module_13676");
    },
    light() {
      return require("module_13677");
    }
  });
};
export const GuildSubscriptionRemoval = function GuildSubscriptionRemoval(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13675");
    },
    darker() {
      return require("module_13676");
    },
    light() {
      return require("module_13677");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
