// Module ID: 14528
// Function ID: 14529
// Dependencies: [9561, 14529, 2]

// Module 14528
import root from "root" /* 9561 */;
import registerTransportDefault from "registerTransport" /* 14529 */;

require = arg1;
const tmp2 = new registerTransportDefault(() => Promise.resolve(root));
const result = require("set").fileFinishedImporting("modules/rpc/native/NativeRPCServer.tsx");

export default tmp2;
