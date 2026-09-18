// Module ID: 14676
// Function ID: 14677
// Name: NativeRPCServerManager
// Dependencies: [14677, 14684, 2]

// Module 14676 (NativeRPCServerManager)
import NativeRPCImplementationDefault from "NativeRPCImplementation" /* 14684 */;
import RPCServerManager from "RPCServerManager" /* 14677 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/server/NativeRPCServerManager.tsx");

export default new RPCServerManager(NativeRPCImplementationDefault);
