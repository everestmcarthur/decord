// Module ID: 4196
// Function ID: 4197
// Name: getLocalizedLink
// Dependencies: [1114, 2]
// Exports: default

// Module 4196 (getLocalizedLink)
import util from "util" /* 1114 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/getLocalizedLink.tsx");

export default function getLocalizedLink(arg0) {
  const formatted = util.intl.currentLocale.toLowerCase();
  return formatted in arg0 ? arg0[formatted] : arg0.default;
};
