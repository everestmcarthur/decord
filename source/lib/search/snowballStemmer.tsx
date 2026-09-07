// Module ID: 16716
// Function ID: 16717
// Name: snowballStem
// Dependencies: [16717, 2]
// Exports: snowballStem

// Module 16716 (snowballStem)
import set from "set" /* 2 */;
import module_16717 from "module_16717" /* 16717 */;

let closure_0 = module_16717.newStemmer("english");
const result = set.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
