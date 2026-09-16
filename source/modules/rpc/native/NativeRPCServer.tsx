// Module ID: 14642
// Function ID: 14643
// Name: NativeRPCServer
// Dependencies: [9699, 14643, 2]

// Module 14642 (NativeRPCServer)
import root from "root" /* 9699 */;
import RPCServerDefault from "RPCServer" /* 14643 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));
