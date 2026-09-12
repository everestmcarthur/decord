// Module ID: 16825
// Function ID: 16826
// Name: snowballStemmer
// Dependencies: [16826, 2]
// Exports: snowballStem

// Module 16825 (snowballStemmer)
import module_16826 from "module_16826" /* 16826 */;
import size from "module_2" /* 2 */;

let closure_0 = module_16826.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
