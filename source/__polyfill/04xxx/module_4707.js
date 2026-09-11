// Module ID: 4707
// Function ID: 4708
// Dependencies: [657, 4692, 4690]

// Module 4707
import baseGetAllKeys from "baseGetAllKeys" /* 657 */;
import _mod4690 from "module_4690" /* 4690 */;
import keysIn from "keysIn" /* 4692 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keysIn, _mod4690);
};
