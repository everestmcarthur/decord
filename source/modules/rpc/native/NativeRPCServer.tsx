// Module ID: 14580
// Function ID: 14581
// Name: NativeRPCServer
// Dependencies: [9649, 14581, 2]

// Module 14580 (NativeRPCServer)
import root from "root" /* 9649 */;
import RPCServerDefault from "RPCServer" /* 14581 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));
