// Module ID: 4709
// Function ID: 4710
// Dependencies: [4710, 4714, 4716]

// Module 4709
import shortOut from "shortOut" /* 4710 */;
import overRest from "overRest" /* 4714 */;
import flatten from "flatten" /* 4716 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};
