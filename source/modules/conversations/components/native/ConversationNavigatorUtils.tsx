// Module ID: 7997
// Function ID: 7998
// Name: ConversationNavigatorUtils
// Dependencies: [4465, 4617, 2]
// Exports: closeConversationsAndJumpToMessage

// Module 7997 (ConversationNavigatorUtils)
import RootNavigationRef from "RootNavigationRef" /* 4465 */;
import transitionToChannel from "transitionToChannel" /* 4617 */;
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
