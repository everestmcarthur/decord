// Module ID: 4561
// Function ID: 4562
// Name: RegexUtils
// Dependencies: [2]

// Module 4561 (RegexUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/RegexUtils.tsx");

export default {
  escape(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
  }
};
