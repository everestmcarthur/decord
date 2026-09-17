// Module ID: 13440
// Function ID: 13441
// Name: useRefreshSavedMessages
// Dependencies: [19, 11856, 2]
// Exports: default

// Module 13440 (useRefreshSavedMessages)
import SavedMessagesActions from "SavedMessagesActions" /* 11856 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/useRefreshSavedMessages.tsx");

export default function useRefreshSavedMessages() {
  const effect = noop.useEffect(() => {
    const andUpdateSavedMessages = SavedMessagesActions.fetchAndUpdateSavedMessages();
  }, []);
};
