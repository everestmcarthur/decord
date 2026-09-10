// Module ID: 16810
// Function ID: 16811
// Name: snowballStemmer
// Dependencies: [16811, 2]
// Exports: snowballStem

// Module 16810 (snowballStemmer)
import module_16811 from "module_16811" /* 16811 */;
import size from "module_2" /* 2 */;

let closure_0 = module_16811.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
