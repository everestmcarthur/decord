// Module ID: 8473
// Function ID: 8474
// Name: baseRest
// Dependencies: [4710, 4714, 549]

// Module 8473 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 4710 */;
import overRest from "overRest" /* 4714 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};
