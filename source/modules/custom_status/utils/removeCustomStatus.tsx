// Module ID: 11373
// Function ID: 11374
// Name: removeCustomStatus
// Dependencies: [11371, 2]
// Exports: default

// Module 11373 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 11371 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
