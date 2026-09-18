// Module ID: 14460
// Function ID: 14461
// Name: NativeRPCServerManager
// Dependencies: [14461, 14468, 2]

// Module 14460 (NativeRPCServerManager)
import NativeRPCImplementationDefault from "NativeRPCImplementation" /* 14468 */;
import RPCServerManager from "RPCServerManager" /* 14461 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/server/NativeRPCServerManager.tsx");

export default new RPCServerManager(NativeRPCImplementationDefault);
