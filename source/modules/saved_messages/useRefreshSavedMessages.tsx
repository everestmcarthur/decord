// Module ID: 13416
// Function ID: 13417
// Name: useRefreshSavedMessages
// Dependencies: [19, 11835, 2]
// Exports: default

// Module 13416 (useRefreshSavedMessages)
import SavedMessagesActions from "SavedMessagesActions" /* 11835 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/useRefreshSavedMessages.tsx");

export default function useRefreshSavedMessages() {
  const effect = noop.useEffect(() => {
    const andUpdateSavedMessages = SavedMessagesActions.fetchAndUpdateSavedMessages();
  }, []);
};
