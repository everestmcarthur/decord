// Module ID: 4910
// Function ID: 4911
// Name: transformMessagPoll
// Dependencies: [4166, 2]
// Exports: default

// Module 4910 (transformMessagPoll)
import _modDef4166 from "module_4166" /* 4166 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = _modDef4166(expiry.expiry);
  return obj;
};
