// Module ID: 14800
// Function ID: 14801
// Name: NativeRPCServer
// Dependencies: [9582, 14801, 2]

// Module 14800 (NativeRPCServer)
import root from "root" /* 9582 */;
import RPCServerDefault from "RPCServer" /* 14801 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));
