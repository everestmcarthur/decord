// Module ID: 13421
// Function ID: 13422
// Name: useRefreshSavedMessages
// Dependencies: [19, 11839, 2]
// Exports: default

// Module 13421 (useRefreshSavedMessages)
import SavedMessagesActions from "SavedMessagesActions" /* 11839 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/useRefreshSavedMessages.tsx");

export default function useRefreshSavedMessages() {
  const effect = noop.useEffect(() => {
    const andUpdateSavedMessages = SavedMessagesActions.fetchAndUpdateSavedMessages();
  }, []);
};
