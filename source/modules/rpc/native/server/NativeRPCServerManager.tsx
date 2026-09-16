// Module ID: 14573
// Function ID: 14574
// Name: NativeRPCServerManager
// Dependencies: [14574, 14581, 2]

// Module 14573 (NativeRPCServerManager)
import NativeRPCImplementationDefault from "NativeRPCImplementation" /* 14581 */;
import RPCServerManager from "RPCServerManager" /* 14574 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/server/NativeRPCServerManager.tsx");

export default new RPCServerManager(NativeRPCImplementationDefault);
