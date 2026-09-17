// Module ID: 8045
// Function ID: 8046
// Name: ConversationNavigatorUtils
// Dependencies: [4498, 4651, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 8045 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 4498 */;
import transitionToChannel from "transitionToChannel" /* 4651 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorUtils.tsx");

export const closeConversationsAndJumpToMessage = function closeConversationsAndJumpToMessage(channelId, id) {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (rootNavigationRef != null) {
    rootNavigationRef.goBack();
  }
  transitionToChannel.transitionToMessage(channelId, id, { navigationReplace: true });
};
export const ConversationNavigatorScreens = { LIST: "conversation_list", FOCUS: "conversation_focus" };
