// Module ID: 14509
// Function ID: 14510
// Name: sum
// Dependencies: [1085, 2]

// Module 14509 (sum)
import set from "set" /* 2 */;
import sum from "sum" /* 1085 */;

const result = set.fileFinishedImporting("modules/rpc/server/commands/platformBehaviors.tsx");

export default {
  [sum.RPCCommands.GET_PLATFORM_BEHAVIORS]: {
    handler() {
      return { iosKeyboardResizesView: true };
    }
  }
};
