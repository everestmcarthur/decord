// Module ID: 11401
// Function ID: 11402
// Name: useShouldShowInitialSafetyToolsButtonTooltip
// Dependencies: [10920, 11400, 504, 2]
// Exports: useShouldShowInitialSafetyToolsButtonTooltip

// Module 11401 (useShouldShowInitialSafetyToolsButtonTooltip)
import closure_2 from "handleConnectionOpen" /* 10920 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useShouldShowInitialSafetyToolsButtonTooltip.tsx");

export const useShouldShowInitialSafetyToolsButtonTooltip = function useShouldShowInitialSafetyToolsButtonTooltip(channelId) {
  const _require = channelId;
  const inappropriateConversationSafetyToolsWarningForChannel = _require(11400).useInappropriateConversationSafetyToolsWarningForChannel(channelId);
  const obj = _require(11400);
  const items = [closure_2];
  const obj2 = _require(504);
  return null != inappropriateConversationSafetyToolsWarningForChannel && !_require(504).useStateFromStores(items, () => closure_1_2.hasShownInitialTooltipForChannel(closure_0));
};
