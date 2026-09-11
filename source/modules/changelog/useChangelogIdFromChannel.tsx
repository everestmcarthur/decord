// Module ID: 12533
// Function ID: 12534
// Name: useChangelogIdFromChannel
// Dependencies: [4828, 504, 2]
// Exports: default

// Module 12533 (useChangelogIdFromChannel)
import MessageStore from "MessageStore" /* 4828 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/changelog/useChangelogIdFromChannel.tsx");

export default function useChangelogIdFromChannel(arg0) {
  _require = arg0;
  const items = [MessageStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => MessageStore.getLastMessage(closure_0));
  let changelogId;
  if (stateFromStores != null) {
    changelogId = stateFromStores.changelogId;
  }
  return changelogId;
};
