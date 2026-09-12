// Module ID: 11254
// Function ID: 11255
// Name: removeCustomStatus
// Dependencies: [11252, 2]
// Exports: default

// Module 11254 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 11252 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
