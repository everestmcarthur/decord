// Module ID: 14521
// Function ID: 14522
// Name: unsupportedCommand
// Dependencies: [1074, 9559, 2]

// Module 14521 (unsupportedCommand)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import prototypeDefault from "prototype" /* 9559 */;

const RPCErrors = ME.RPCErrors;
let obj = {
  handler(cmd) {
    let tmp = prototypeDefault;
    tmp = new tmp({ errorCode: RPCErrors.INVALID_COMMAND }, "Unsupported command: " + cmd.cmd);
    throw tmp;
  }
};
obj = {
  handler(cmd) {
    let tmp = prototypeDefault;
    tmp = new tmp({ errorCode: RPCErrors.INVALID_COMMAND }, "Deprecated command: " + cmd.cmd);
    throw tmp;
  }
};
const result = set.fileFinishedImporting("modules/rpc/helpers/unavailableCommand.tsx");

export const unsupportedCommand = obj;
export const deprecatedCommand = obj;
