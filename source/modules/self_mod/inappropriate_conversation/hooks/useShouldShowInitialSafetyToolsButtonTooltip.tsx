// Module ID: 11492
// Function ID: 11493
// Name: useShouldShowInitialSafetyToolsButtonTooltip
// Dependencies: [11009, 11491, 504, 2]
// Exports: useShouldShowInitialSafetyToolsButtonTooltip

// Module 11492 (useShouldShowInitialSafetyToolsButtonTooltip)
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 11009 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useShouldShowInitialSafetyToolsButtonTooltip.tsx");

export const useShouldShowInitialSafetyToolsButtonTooltip = function useShouldShowInitialSafetyToolsButtonTooltip(channelId) {
  _require = channelId;
  const inappropriateConversationSafetyToolsWarningForChannel = require("useInappropriateConversationSafetyToolsWarningForChannel").useInappropriateConversationSafetyToolsWarningForChannel(channelId);
  const obj = require("useInappropriateConversationSafetyToolsWarningForChannel");
  const items = [ChannelSafetyWarningsStore];
  const obj2 = require("initialize");
  return null != inappropriateConversationSafetyToolsWarningForChannel && !require("initialize").useStateFromStores(items, () => ChannelSafetyWarningsStore.hasShownInitialTooltipForChannel(closure_0));
};
