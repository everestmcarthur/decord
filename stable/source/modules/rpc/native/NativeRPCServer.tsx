// Module ID: 14528
// Function ID: 14529
// Name: NativeRPCServer
// Dependencies: [9562, 14529, 2]

// Module 14528 (NativeRPCServer)
import root from "root" /* 9562 */;
import RPCServerDefault from "RPCServer" /* 14529 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));
