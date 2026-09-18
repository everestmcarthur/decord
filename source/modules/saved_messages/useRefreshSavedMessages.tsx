// Module ID: 13531
// Function ID: 13532
// Name: useRefreshSavedMessages
// Dependencies: [19, 11947, 2]
// Exports: default

// Module 13531 (useRefreshSavedMessages)
import SavedMessagesActions from "SavedMessagesActions" /* 11947 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/useRefreshSavedMessages.tsx");

export default function useRefreshSavedMessages() {
  const effect = noop.useEffect(() => {
    const andUpdateSavedMessages = SavedMessagesActions.fetchAndUpdateSavedMessages();
  }, []);
};
