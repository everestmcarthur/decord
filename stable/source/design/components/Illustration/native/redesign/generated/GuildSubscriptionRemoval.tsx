// Module ID: 13621
// Function ID: 13622
// Name: GuildSubscriptionRemoval
// Dependencies: [19, 17, 21, 8234, 13622, 13623, 13624, 4411, 2]
// Exports: GuildSubscriptionRemoval, getGuildSubscriptionRemovalSource, useGuildSubscriptionRemovalSource

// Module 13621 (GuildSubscriptionRemoval)
import shared from "shared" /* 4411 */;
import _mod8234 from "module_8234" /* 8234 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionRemoval.tsx");

export const getGuildSubscriptionRemovalSource = function getGuildSubscriptionRemovalSource(theme) {
  return _mod8234.getIllustrationSource(theme, {
    dark() {
      return require("module_13622");
    },
    darker() {
      return require("module_13623");
    },
    light() {
      return require("module_13624");
    }
  });
};
export const useGuildSubscriptionRemovalSource = function useGuildSubscriptionRemovalSource() {
  const obj = shared;
  return _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13622");
    },
    darker() {
      return require("module_13623");
    },
    light() {
      return require("module_13624");
    }
  });
};
export const GuildSubscriptionRemoval = function GuildSubscriptionRemoval(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13622");
    },
    darker() {
      return require("module_13623");
    },
    light() {
      return require("module_13624");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
