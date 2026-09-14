// Module ID: 13620
// Function ID: 13621
// Name: GuildSubscriptionNoGuilds
// Dependencies: [19, 17, 21, 8349, 13621, 13622, 13623, 4488, 2]
// Exports: GuildSubscriptionNoGuilds, getGuildSubscriptionNoGuildsSource, useGuildSubscriptionNoGuildsSource

// Module 13620 (GuildSubscriptionNoGuilds)
import shared from "shared" /* 4488 */;
import _mod8349 from "module_8349" /* 8349 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionNoGuilds.tsx");

export const getGuildSubscriptionNoGuildsSource = function getGuildSubscriptionNoGuildsSource(theme) {
  return _mod8349.getIllustrationSource(theme, {
    dark() {
      return require("module_13621");
    },
    darker() {
      return require("module_13622");
    },
    light() {
      return require("module_13623");
    }
  });
};
export const useGuildSubscriptionNoGuildsSource = function useGuildSubscriptionNoGuildsSource() {
  const obj = shared;
  return _mod8349.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13621");
    },
    darker() {
      return require("module_13622");
    },
    light() {
      return require("module_13623");
    }
  });
};
export const GuildSubscriptionNoGuilds = function GuildSubscriptionNoGuilds(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8349.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13621");
    },
    darker() {
      return require("module_13622");
    },
    light() {
      return require("module_13623");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
