// Module ID: 14534
// Function ID: 14535
// Name: NativeRPCServerManager
// Dependencies: [14535, 14542, 2]

// Module 14534 (NativeRPCServerManager)
import NativeRPCImplementationDefault from "NativeRPCImplementation" /* 14542 */;
import RPCServerManager from "RPCServerManager" /* 14535 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/server/NativeRPCServerManager.tsx");

export default new RPCServerManager(NativeRPCImplementationDefault);
