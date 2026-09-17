// Module ID: 4740
// Function ID: 4741
// Dependencies: [657, 4725, 4723]

// Module 4740
import baseGetAllKeys from "baseGetAllKeys" /* 657 */;
import _mod4723 from "module_4723" /* 4723 */;
import keysIn from "keysIn" /* 4725 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keysIn, _mod4723);
};
