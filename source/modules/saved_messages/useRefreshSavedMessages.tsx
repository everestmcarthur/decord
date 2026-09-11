// Module ID: 13384
// Function ID: 13385
// Name: useRefreshSavedMessages
// Dependencies: [19, 11800, 2]
// Exports: default

// Module 13384 (useRefreshSavedMessages)
import SavedMessagesActions from "SavedMessagesActions" /* 11800 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/useRefreshSavedMessages.tsx");

export default function useRefreshSavedMessages() {
  const effect = noop.useEffect(() => {
    const andUpdateSavedMessages = SavedMessagesActions.fetchAndUpdateSavedMessages();
  }, []);
};
