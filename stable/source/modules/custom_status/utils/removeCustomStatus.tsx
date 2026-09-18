// Module ID: 11125
// Function ID: 11126
// Name: removeCustomStatus
// Dependencies: [11123, 2]
// Exports: default

// Module 11125 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 11123 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
