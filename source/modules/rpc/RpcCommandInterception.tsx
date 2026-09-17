// Module ID: 14652
// Function ID: 14653
// Name: RpcCommandInterception
// Dependencies: [2]
// Exports: interceptRpcCommand, setRpcCommandInterceptor

// Module 14652 (RpcCommandInterception)
import size from "module_2" /* 2 */;

let global = null;
const result = size.fileFinishedImporting("modules/rpc/RpcCommandInterception.tsx");

export function setRpcCommandInterceptor(arg0) {
  global = arg0;
}
export const interceptRpcCommand = function interceptRpcCommand(framebus) {
  if (null == global) {
    return null;
  } else {
    try {
      return global(framebus);
    } catch (err) {
      return tmp;
    }
  }
};
