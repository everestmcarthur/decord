// Module ID: 4741
// Function ID: 4742
// Dependencies: [4742, 4746, 4748]

// Module 4741
import shortOut from "shortOut" /* 4742 */;
import overRest from "overRest" /* 4746 */;
import flatten from "flatten" /* 4748 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};
