// Module ID: 14602
// Function ID: 14603
// Name: NativeRPCServer
// Dependencies: [9626, 14603, 2]

// Module 14602 (NativeRPCServer)
import root from "root" /* 9626 */;
import RPCServerDefault from "RPCServer" /* 14603 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));
