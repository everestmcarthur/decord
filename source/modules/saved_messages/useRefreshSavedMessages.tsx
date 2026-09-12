// Module ID: 13415
// Function ID: 13416
// Name: useRefreshSavedMessages
// Dependencies: [19, 11834, 2]
// Exports: default

// Module 13415 (useRefreshSavedMessages)
import SavedMessagesActions from "SavedMessagesActions" /* 11834 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/useRefreshSavedMessages.tsx");

export default function useRefreshSavedMessages() {
  const effect = noop.useEffect(() => {
    const andUpdateSavedMessages = SavedMessagesActions.fetchAndUpdateSavedMessages();
  }, []);
};
