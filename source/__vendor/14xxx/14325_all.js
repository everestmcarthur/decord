// Module ID: 14325
// Function ID: 14326
// Name: all
// Dependencies: [14326]

// Module 14325 (all)
import all from "all" /* 14326 */;


export default (obj) => {
  if (typeof obj === "object") {
    let tmp2 = null !== obj;
  } else {
    tmp2 = all(obj);
  }
  return tmp2;
};
