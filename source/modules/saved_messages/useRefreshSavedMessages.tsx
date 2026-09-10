// Module ID: 13359
// Function ID: 13360
// Name: useRefreshSavedMessages
// Dependencies: [19, 11776, 2]
// Exports: default

// Module 13359 (useRefreshSavedMessages)
import SavedMessagesActions from "SavedMessagesActions" /* 11776 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/useRefreshSavedMessages.tsx");

export default function useRefreshSavedMessages() {
  const effect = noop.useEffect(() => {
    const andUpdateSavedMessages = SavedMessagesActions.fetchAndUpdateSavedMessages();
  }, []);
};
