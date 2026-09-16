// Module ID: 4740
// Function ID: 4741
// Dependencies: [4741, 4745, 4747]

// Module 4740
import shortOut from "shortOut" /* 4741 */;
import overRest from "overRest" /* 4745 */;
import flatten from "flatten" /* 4747 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};
