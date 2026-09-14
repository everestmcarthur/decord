// Module ID: 11530
// Function ID: 11531
// Name: useShouldShowInitialSafetyToolsButtonTooltip
// Dependencies: [11047, 11529, 504, 2]
// Exports: useShouldShowInitialSafetyToolsButtonTooltip

// Module 11530 (useShouldShowInitialSafetyToolsButtonTooltip)
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 11047 */;

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
