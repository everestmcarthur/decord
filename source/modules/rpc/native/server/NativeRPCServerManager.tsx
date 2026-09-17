// Module ID: 14581
// Function ID: 14582
// Name: NativeRPCServerManager
// Dependencies: [14582, 14589, 2]

// Module 14581 (NativeRPCServerManager)
import NativeRPCImplementationDefault from "NativeRPCImplementation" /* 14589 */;
import RPCServerManager from "RPCServerManager" /* 14582 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/server/NativeRPCServerManager.tsx");

export default new RPCServerManager(NativeRPCImplementationDefault);
