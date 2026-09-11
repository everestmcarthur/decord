// Module ID: 4943
// Function ID: 4944
// Name: transformMessagPoll
// Dependencies: [4198, 2]
// Exports: default

// Module 4943 (transformMessagPoll)
import _modDef4198 from "module_4198" /* 4198 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = _modDef4198(expiry.expiry);
  return obj;
};
