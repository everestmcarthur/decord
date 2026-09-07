// Module ID: 11125
// Function ID: 11126
// Name: removeCustomStatus
// Dependencies: [11123, 2]
// Exports: default

// Module 11125 (removeCustomStatus)
import set from "set" /* 2 */;
import setCustomStatusDefault from "setCustomStatus" /* 11123 */;

const result = set.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
