// Module ID: 4706
// Function ID: 4707
// Dependencies: [657, 4691, 4689]

// Module 4706
import baseGetAllKeys from "baseGetAllKeys" /* 657 */;
import _mod4689 from "module_4689" /* 4689 */;
import keysIn from "keysIn" /* 4691 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keysIn, _mod4689);
};
