// Module ID: 14745
// Function ID: 14746
// Name: NativeRPCServer
// Dependencies: [9804, 14746, 2]

// Module 14745 (NativeRPCServer)
import root from "root" /* 9804 */;
import RPCServerDefault from "RPCServer" /* 14746 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));
