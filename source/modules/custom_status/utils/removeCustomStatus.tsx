// Module ID: 11273
// Function ID: 11274
// Name: removeCustomStatus
// Dependencies: [11271, 2]
// Exports: default

// Module 11273 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 11271 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
