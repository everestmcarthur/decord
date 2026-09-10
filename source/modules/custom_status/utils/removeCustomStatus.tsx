// Module ID: 11152
// Function ID: 11153
// Name: removeCustomStatus
// Dependencies: [11150, 2]
// Exports: default

// Module 11152 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 11150 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
