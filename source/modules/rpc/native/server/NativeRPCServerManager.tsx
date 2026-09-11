// Module ID: 14512
// Function ID: 14513
// Name: NativeRPCServerManager
// Dependencies: [14513, 14520, 2]

// Module 14512 (NativeRPCServerManager)
import NativeRPCImplementationDefault from "NativeRPCImplementation" /* 14520 */;
import RPCServerManager from "RPCServerManager" /* 14513 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/server/NativeRPCServerManager.tsx");

export default new RPCServerManager(NativeRPCImplementationDefault);
