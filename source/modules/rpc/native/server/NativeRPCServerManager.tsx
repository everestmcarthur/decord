// Module ID: 14545
// Function ID: 14546
// Name: NativeRPCServerManager
// Dependencies: [14546, 14553, 2]

// Module 14545 (NativeRPCServerManager)
import NativeRPCImplementationDefault from "NativeRPCImplementation" /* 14553 */;
import RPCServerManager from "RPCServerManager" /* 14546 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/server/NativeRPCServerManager.tsx");

export default new RPCServerManager(NativeRPCImplementationDefault);
