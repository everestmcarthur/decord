// Module ID: 4707
// Function ID: 4708
// Dependencies: [4708, 4712, 4714]

// Module 4707
import shortOut from "shortOut" /* 4708 */;
import overRest from "overRest" /* 4712 */;
import flatten from "flatten" /* 4714 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};
