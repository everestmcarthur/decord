// Module ID: 4674
// Function ID: 4675
// Dependencies: [657, 4659, 4657]

// Module 4674
import baseGetAllKeys from "baseGetAllKeys" /* 657 */;
import _mod4657 from "module_4657" /* 4657 */;
import keysIn from "keysIn" /* 4659 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keysIn, _mod4657);
};
