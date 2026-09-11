// Module ID: 14306
// Function ID: 14307
// Dependencies: [14296, 14299]
// Exports: LookupSupportedLocales

// Module 14306
import _mod14296 from "module_14296" /* 14296 */;
import BestAvailableLocale from "BestAvailableLocale" /* 14299 */;

require = arg1;
const dependencyMap = arg6;

export const LookupSupportedLocales = function LookupSupportedLocales(arg0, arg1) {
  const items = [];
  for (let num = 0; num < arg1.length; num = num + 1) {
    let str = arg1[num];
    let replaced = str.replace(_mod14296.UNICODE_EXTENSION_SEQUENCE_REGEX, "");
    let BestAvailableLocaleResult = BestAvailableLocale.BestAvailableLocale(arg0, replaced);
    if (BestAvailableLocaleResult) {
      let arr = items.push(BestAvailableLocaleResult);
    }
  }
  return items;
};
