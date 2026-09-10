// Module ID: 13693
// Function ID: 13694
// Name: GuildSubscriptionRemoval
// Dependencies: [19, 17, 21, 8296, 13694, 13695, 13696, 4456, 2]
// Exports: GuildSubscriptionRemoval, getGuildSubscriptionRemovalSource, useGuildSubscriptionRemovalSource

// Module 13693 (GuildSubscriptionRemoval)
import shared from "shared" /* 4456 */;
import _mod8296 from "module_8296" /* 8296 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionRemoval.tsx");

export const getGuildSubscriptionRemovalSource = function getGuildSubscriptionRemovalSource(theme) {
  return _mod8296.getIllustrationSource(theme, {
    dark() {
      return require("module_13694");
    },
    darker() {
      return require("module_13695");
    },
    light() {
      return require("module_13696");
    }
  });
};
export const useGuildSubscriptionRemovalSource = function useGuildSubscriptionRemovalSource() {
  const obj = shared;
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13694");
    },
    darker() {
      return require("module_13695");
    },
    light() {
      return require("module_13696");
    }
  });
};
export const GuildSubscriptionRemoval = function GuildSubscriptionRemoval(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13694");
    },
    darker() {
      return require("module_13695");
    },
    light() {
      return require("module_13696");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
