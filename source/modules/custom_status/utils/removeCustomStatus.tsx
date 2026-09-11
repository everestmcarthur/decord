// Module ID: 11217
// Function ID: 11218
// Name: removeCustomStatus
// Dependencies: [11215, 2]
// Exports: default

// Module 11217 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 11215 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
