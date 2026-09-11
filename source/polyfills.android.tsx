// Module ID: 14251
// Function ID: 14252
// Name: polyfills
// Dependencies: [14252, 14348, 2]

// Module 14251 (polyfills)
import module_14252 from "module_14252" /* 14252 */;
import polyfillsNative from "polyfillsNative" /* 14348 */;
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
