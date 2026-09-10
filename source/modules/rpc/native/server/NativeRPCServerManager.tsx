// Module ID: 14485
// Function ID: 14486
// Name: NativeRPCServerManager
// Dependencies: [14486, 14493, 2]

// Module 14485 (NativeRPCServerManager)
import NativeRPCImplementationDefault from "NativeRPCImplementation" /* 14493 */;
import RPCServerManager from "RPCServerManager" /* 14486 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/server/NativeRPCServerManager.tsx");

export default new RPCServerManager(NativeRPCImplementationDefault);
