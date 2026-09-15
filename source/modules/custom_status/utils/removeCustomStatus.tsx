// Module ID: 11259
// Function ID: 11260
// Name: removeCustomStatus
// Dependencies: [11257, 2]
// Exports: default

// Module 11259 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 11257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
