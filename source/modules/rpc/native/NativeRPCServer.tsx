// Module ID: 14578
// Function ID: 14579
// Name: NativeRPCServer
// Dependencies: [9647, 14579, 2]

// Module 14578 (NativeRPCServer)
import root from "root" /* 9647 */;
import RPCServerDefault from "RPCServer" /* 14579 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));
