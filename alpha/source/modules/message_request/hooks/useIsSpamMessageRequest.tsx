// Module ID: 11626
// Function ID: 11627
// Name: useIsSpamMessageRequest
// Dependencies: [7460, 504, 2]
// Exports: useIsSpamMessageRequest

// Module 11626 (useIsSpamMessageRequest)
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 7460 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsSpamMessageRequest.tsx");

export const useIsSpamMessageRequest = function useIsSpamMessageRequest(id) {
  _require = id;
  const items = [SpamMessageRequestStore];
  const items1 = [id];
  return require("initialize").useStateFromStores(items, () => SpamMessageRequestStore.isSpam(closure_0), items1);
};
