// Module ID: 14281
// Function ID: 14282
// Name: ClientStateStoreStorage
// Dependencies: [13726, 2]
// Exports: setClientState

// Module 14281 (ClientStateStoreStorage)
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13726 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/cache/ClientStateStoreStorage.native.tsx");

export const setClientState = function setClientState(arg0) {
  let str;
  if (arg0 != null) {
    str = arg0.toString();
  }
  NativeFastConnectModuleDefault.setClientState(str, undefined);
};
