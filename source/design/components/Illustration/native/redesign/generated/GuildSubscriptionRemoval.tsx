// Module ID: 13672
// Function ID: 13673
// Name: GuildSubscriptionRemoval
// Dependencies: [19, 17, 21, 8317, 13673, 13674, 13675, 4458, 2]
// Exports: GuildSubscriptionRemoval, getGuildSubscriptionRemovalSource, useGuildSubscriptionRemovalSource

// Module 13672 (GuildSubscriptionRemoval)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionRemoval.tsx");

export const getGuildSubscriptionRemovalSource = function getGuildSubscriptionRemovalSource(theme) {
  return _mod8317.getIllustrationSource(theme, {
    dark() {
      return require("module_13673");
    },
    darker() {
      return require("module_13674");
    },
    light() {
      return require("module_13675");
    }
  });
};
export const useGuildSubscriptionRemovalSource = function useGuildSubscriptionRemovalSource() {
  const obj = shared;
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13673");
    },
    darker() {
      return require("module_13674");
    },
    light() {
      return require("module_13675");
    }
  });
};
export const GuildSubscriptionRemoval = function GuildSubscriptionRemoval(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13673");
    },
    darker() {
      return require("module_13674");
    },
    light() {
      return require("module_13675");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
