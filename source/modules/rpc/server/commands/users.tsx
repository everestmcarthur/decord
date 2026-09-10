// Module ID: 14581
// Function ID: 14582
// Name: users
// Dependencies: [1371, 4510, 1074, 14553, 9630, 2]

// Module 14581 (users)
import transformUserDefault from "transformUser" /* 9630 */;
import UserStore from "UserStore" /* 1371 */;

const Constants = fn(4510);
({ RPC_EMBEDDED_APP_SCOPE, RPC_LOCAL_SCOPE, RPC_SCOPE_CONFIG } = Constants);
const RPCCommands = fn(1074).RPCCommands;
const obj = {};
const CONTEXT_MENU_ICON_NAMES = fn(14553);
const obj3 = {
  scope: null,
  handler(args) {
    const user = UserStore.getUser(args.args.id);
    let tmp2 = null;
    if (null != user) {
      tmp2 = transformUserDefault(user);
    }
    return tmp2;
  }
};
const items = [RPC_EMBEDDED_APP_SCOPE, RPC_LOCAL_SCOPE];
obj3.scope = { [RPC_SCOPE_CONFIG.ANY]: items };
obj[RPCCommands.GET_USER] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_USER, obj3);
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/users.tsx");

export default obj;
