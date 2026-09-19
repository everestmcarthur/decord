// Module ID: 14470
// Function ID: 14471
// Name: polyfills
// Dependencies: [14471, 14567, 2]

// Module 14470 (polyfills)
import module_14471 from "module_14471" /* 14471 */;
import polyfillsNative from "polyfillsNative" /* 14567 */;
import size from "module_2" /* 2 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  const self = this;
  if (0 === this.length) {
    return "";
  } else {
    const call = toLocaleLowerCase.call;
    typeof call === "unknown" ? toLocaleLowerCase() : call(self);
  }
};
const result = size.fileFinishedImporting("polyfills.android.tsx");
