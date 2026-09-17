// Module ID: 12590
// Function ID: 12591
// Name: useChangelogIdFromChannel
// Dependencies: [4861, 504, 2]
// Exports: default

// Module 12590 (useChangelogIdFromChannel)
import MessageStore from "MessageStore" /* 4861 */;

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
