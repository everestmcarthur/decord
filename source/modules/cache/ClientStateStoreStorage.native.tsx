// Module ID: 14196
// Function ID: 14197
// Name: setClientState
// Dependencies: [13641, 2]
// Exports: setClientState

// Module 14196 (setClientState)
import set from "set" /* 2 */;
import enforcingDefault from "enforcing" /* 13641 */;

const result = set.fileFinishedImporting("modules/cache/ClientStateStoreStorage.native.tsx");

export const setClientState = function setClientState(closure_17, arg1) {
  let str;
  if (closure_17 != null) {
    str = closure_17.toString();
  }
  enforcingDefault.setClientState(str, undefined);
};
