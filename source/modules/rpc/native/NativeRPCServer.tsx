// Module ID: 14613
// Function ID: 14614
// Name: NativeRPCServer
// Dependencies: [9686, 14614, 2]

// Module 14613 (NativeRPCServer)
import root from "root" /* 9686 */;
import RPCServerDefault from "RPCServer" /* 14614 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default new RPCServerDefault(() => Promise.resolve(root));
