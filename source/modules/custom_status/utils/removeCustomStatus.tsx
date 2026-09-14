// Module ID: 11255
// Function ID: 11256
// Name: removeCustomStatus
// Dependencies: [11253, 2]
// Exports: default

// Module 11255 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 11253 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
