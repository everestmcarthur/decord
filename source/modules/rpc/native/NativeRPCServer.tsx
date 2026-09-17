// Module ID: 14650
// Function ID: 14651
// Name: NativeRPCServer
// Dependencies: [9710, 14651, 2]

// Module 14650 (NativeRPCServer)
import root from "root" /* 9710 */;
import RPCServerDefault from "RPCServer" /* 14651 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));
