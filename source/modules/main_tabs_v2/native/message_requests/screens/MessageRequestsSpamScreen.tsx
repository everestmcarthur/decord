// Module ID: 17103
// Function ID: 17104
// Name: MessageRequestsSpamScreen
// Dependencies: [19, 21, 17101, 2]
// Exports: default

// Module 17103 (MessageRequestsSpamScreen)
import SpamMessageListDefault from "SpamMessageList" /* 17101 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/message_requests/screens/MessageRequestsSpamScreen.tsx");

export default function MessageRequestsScreen(navigation) {
  navigation = navigation.navigation;
  const items = [navigation];
  const goToMessageRequestPreview = noop.useCallback((channelId) => navigation.push("preview", { channelId }), items);
  return jsx(SpamMessageListDefault, { goToMessageRequestPreview });
};
