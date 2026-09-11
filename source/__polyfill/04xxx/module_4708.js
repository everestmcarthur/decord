// Module ID: 4708
// Function ID: 4709
// Dependencies: [4709, 4713, 4715]

// Module 4708
import shortOut from "shortOut" /* 4709 */;
import overRest from "overRest" /* 4713 */;
import flatten from "flatten" /* 4715 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};
