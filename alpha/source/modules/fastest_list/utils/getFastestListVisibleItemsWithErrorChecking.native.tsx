// Module ID: 7265
// Function ID: 7266
// Name: getFastestListVisibleItemsWithErrorChecking
// Dependencies: [7255, 2]
// Exports: default

// Module 7265 (getFastestListVisibleItemsWithErrorChecking)
import FastestListLogger from "FastestListLogger" /* 7255 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/fastest_list/utils/getFastestListVisibleItemsWithErrorChecking.native.tsx");

export default function getFastestListVisibleItemsWithErrorChecking(listId, sectionStart, sections) {
  if (tmp) {
    const obj2 = { listId, sections, visibleItems: sectionStart };
    FastestListLogger.logFastestListError("Visible items `sectionStart/End` is greater than the number of sections", obj2);
  }
  if (tmp5) {
    const obj4 = { listId, sections, visibleItems: sectionStart };
    FastestListLogger.logFastestListError("Visible items `itemStart/End` is greater than the number of items in the first section", obj4);
  }
  return sectionStart;
};
