// Module ID: 13537
// Function ID: 13538
// Name: getGuildSubscriptionNoGuildsSource
// Dependencies: [19, 17, 21, 8233, 13538, 13539, 13540, 4411, 2]
// Exports: GuildSubscriptionNoGuilds, getGuildSubscriptionNoGuildsSource, useGuildSubscriptionNoGuildsSource

// Module 13537 (getGuildSubscriptionNoGuildsSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 4411 */;
import getIllustrationSource from "getIllustrationSource" /* 8233 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionNoGuilds.tsx");

export const getGuildSubscriptionNoGuildsSource = function getGuildSubscriptionNoGuildsSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(13538);
    },
    darker() {
      return callback(13539);
    },
    light() {
      return callback(13540);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useGuildSubscriptionNoGuildsSource = function useGuildSubscriptionNoGuildsSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(13538);
    },
    darker() {
      return callback(13539);
    },
    light() {
      return callback(13540);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const GuildSubscriptionNoGuilds = function GuildSubscriptionNoGuilds(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(13538);
    },
    darker() {
      return callback(13539);
    },
    light() {
      return callback(13540);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
