// Module ID: 13640
// Function ID: 13641
// Name: getCachedUseAltGateway
// Dependencies: [13641, 2]
// Exports: default

// Module 13640 (getCachedUseAltGateway)
import set from "set" /* 2 */;
import enforcingDefault from "enforcing" /* 13641 */;

const result = set.fileFinishedImporting("modules/gateway/getCachedUseAltGateway.native.tsx");

export default function getCachedUseAltGateway() {
  let flag = enforcingDefault.getConstants().useAltGateway;
  if (flag == null) {
    flag = false;
  }
  return flag;
};
