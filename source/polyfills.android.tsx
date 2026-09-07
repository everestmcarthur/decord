// Module ID: 14199
// Function ID: 14200
// Name: toLocaleLowerCase
// Dependencies: [14200, 14296, 2]

// Module 14199 (toLocaleLowerCase)
import set from "set" /* 2 */;
import addLikelySubtags from "addLikelySubtags" /* 14200 */;
import module_14296 from "module_14296" /* 14296 */;

String.prototype.toLocaleLowerCase = function toLocaleLowerCase() {
  const self = this;
  if (0 === this.length) {
    return "";
  } else {
    const call = toLocaleLowerCase.call;
    typeof call === "unknown" ? toLocaleLowerCase() : call(self);
    const tmp = toLocaleLowerCase;
  }
};
const result = set.fileFinishedImporting("polyfills.android.tsx");
