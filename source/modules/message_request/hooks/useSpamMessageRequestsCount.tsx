// Module ID: 17095
// Function ID: 17096
// Name: useSpamMessageRequestsCount
// Dependencies: [7330, 504, 2]
// Exports: useSpamMessageRequestCount

// Module 17095 (useSpamMessageRequestsCount)
import initialize from "initialize" /* 504 */;
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 7330 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/hooks/useSpamMessageRequestsCount.tsx");

export const useSpamMessageRequestCount = function useSpamMessageRequestCount() {
  const items = [SpamMessageRequestStore];
  return initialize.useStateFromStores(items, () => spamChannelsCount.getSpamChannelsCount());
};
