// Module ID: 4705
// Function ID: 4706
// Dependencies: [657, 4690, 4688]

// Module 4705
import baseGetAllKeys from "baseGetAllKeys" /* 657 */;
import _mod4688 from "module_4688" /* 4688 */;
import keysIn from "keysIn" /* 4690 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keysIn, _mod4688);
};
