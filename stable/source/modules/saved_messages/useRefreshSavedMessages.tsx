// Module ID: 13287
// Function ID: 13288
// Name: useRefreshSavedMessages
// Dependencies: [19, 11710, 2]
// Exports: default

// Module 13287 (useRefreshSavedMessages)
import SavedMessagesActions from "SavedMessagesActions" /* 11710 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/useRefreshSavedMessages.tsx");

export default function useRefreshSavedMessages() {
  const effect = noop.useEffect(() => {
    const andUpdateSavedMessages = SavedMessagesActions.fetchAndUpdateSavedMessages();
  }, []);
};
