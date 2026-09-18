// Module ID: 17101
// Function ID: 17102
// Name: snowballStemmer
// Dependencies: [17102, 2]
// Exports: snowballStem

// Module 17101 (snowballStemmer)
import module_17102 from "module_17102" /* 17102 */;
import size from "module_2" /* 2 */;

let closure_0 = module_17102.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
