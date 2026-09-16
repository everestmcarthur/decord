// Module ID: 8039
// Function ID: 8040
// Name: ConversationNavigatorUtils
// Dependencies: [4496, 4649, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 8039 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 4496 */;
import transitionToChannel from "transitionToChannel" /* 4649 */;
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
