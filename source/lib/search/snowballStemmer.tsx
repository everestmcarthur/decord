// Module ID: 16865
// Function ID: 16866
// Name: snowballStemmer
// Dependencies: [16866, 2]
// Exports: snowballStem

// Module 16865 (snowballStemmer)
import module_16866 from "module_16866" /* 16866 */;
import size from "module_2" /* 2 */;

let closure_0 = module_16866.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
