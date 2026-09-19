// Module ID: 13586
// Function ID: 13587
// Name: useRefreshSavedMessages
// Dependencies: [19, 11956, 2]
// Exports: default

// Module 13586 (useRefreshSavedMessages)
import SavedMessagesActions from "SavedMessagesActions" /* 11956 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/useRefreshSavedMessages.tsx");

export default function useRefreshSavedMessages() {
  const effect = noop.useEffect(() => {
    const andUpdateSavedMessages = SavedMessagesActions.fetchAndUpdateSavedMessages();
  }, []);
};
