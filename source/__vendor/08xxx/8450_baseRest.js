// Module ID: 8450
// Function ID: 8451
// Name: baseRest
// Dependencies: [4708, 4712, 549]

// Module 8450 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 4708 */;
import overRest from "overRest" /* 4712 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};
