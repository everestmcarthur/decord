// Module ID: 12438
// Function ID: 12439
// Name: useShouldBlockDMInputForQuarantinedUser
// Dependencies: [4781, 1074, 12270, 504, 2]
// Exports: default

// Module 12438 (useShouldBlockDMInputForQuarantinedUser)
import MessageStore from "MessageStore" /* 4781 */;

const require = globalThis.__r;

const require = fn;
const UserFlags = fn(1074).UserFlags;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quarantine/useShouldBlockDMInputForQuarantinedUser.tsx");

export default function useShouldBlockDMInputForQuarantinedUser(hasFlag, channel) {
  _require = channel;
  const showConvoStarterInDM = require("useShowConvoStarterInDM").useShowConvoStarterInDM(channel);
  require("initialize");
  [][0] = channel;
  let tmp4 = null != hasFlag;
  if (tmp4) {
    tmp4 = hasFlag.hasFlag(UserFlags.QUARANTINED) && showConvoStarterInDM && !tmp3;
    const tmp6 = hasFlag.hasFlag(UserFlags.QUARANTINED) && showConvoStarterInDM && !tmp3;
  }
  return tmp4;
};
