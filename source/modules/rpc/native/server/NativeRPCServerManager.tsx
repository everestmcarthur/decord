// Module ID: 14510
// Function ID: 14511
// Name: NativeRPCServerManager
// Dependencies: [14511, 14518, 2]

// Module 14510 (NativeRPCServerManager)
import NativeRPCImplementationDefault from "NativeRPCImplementation" /* 14518 */;
import RPCServerManager from "RPCServerManager" /* 14511 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/server/NativeRPCServerManager.tsx");

export default new RPCServerManager(NativeRPCImplementationDefault);
