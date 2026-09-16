// Module ID: 16922
// Function ID: 16923
// Name: snowballStemmer
// Dependencies: [16923, 2]
// Exports: snowballStem

// Module 16922 (snowballStemmer)
import module_16923 from "module_16923" /* 16923 */;
import size from "module_2" /* 2 */;

let closure_0 = module_16923.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
