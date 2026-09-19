// Module ID: 14731
// Function ID: 14732
// Name: NativeRPCServerManager
// Dependencies: [14732, 14739, 2]

// Module 14731 (NativeRPCServerManager)
import NativeRPCImplementationDefault from "NativeRPCImplementation" /* 14739 */;
import RPCServerManager from "RPCServerManager" /* 14732 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/server/NativeRPCServerManager.tsx");

export default new RPCServerManager(NativeRPCImplementationDefault);
