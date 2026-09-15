// Module ID: 14555
// Function ID: 14556
// Name: NativeRPCServerManager
// Dependencies: [14556, 14563, 2]

// Module 14555 (NativeRPCServerManager)
import NativeRPCImplementationDefault from "NativeRPCImplementation" /* 14563 */;
import RPCServerManager from "RPCServerManager" /* 14556 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/server/NativeRPCServerManager.tsx");

export default new RPCServerManager(NativeRPCImplementationDefault);
