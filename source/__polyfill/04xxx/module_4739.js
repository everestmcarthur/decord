// Module ID: 4739
// Function ID: 4740
// Dependencies: [657, 4724, 4722]

// Module 4739
import baseGetAllKeys from "baseGetAllKeys" /* 657 */;
import _mod4722 from "module_4722" /* 4722 */;
import keysIn from "keysIn" /* 4724 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keysIn, _mod4722);
};
