// Module ID: 16971
// Function ID: 16972
// Name: useSpamMessageRequestsCount
// Dependencies: [7294, 504, 2]
// Exports: useSpamMessageRequestCount

// Module 16971 (useSpamMessageRequestsCount)
import initialize from "initialize" /* 504 */;
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 7294 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/hooks/useSpamMessageRequestsCount.tsx");

export const useSpamMessageRequestCount = function useSpamMessageRequestCount() {
  const items = [SpamMessageRequestStore];
  return initialize.useStateFromStores(items, () => spamChannelsCount.getSpamChannelsCount());
};
