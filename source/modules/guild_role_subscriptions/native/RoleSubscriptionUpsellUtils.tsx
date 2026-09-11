// Module ID: 10387
// Function ID: 10388
// Name: RoleSubscriptionUpsellUtils
// Dependencies: [19, 21, 4951, 10388, 1896, 2]

// Module 10387 (RoleSubscriptionUpsellUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4951 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/RoleSubscriptionUpsellUtils.tsx");

export default {
  handleShowEmojiUpsellAlert(guildId) {
    guildId = guildId.guildId;
    actions_AlertActionCreatorsDefault.openLazy({
      importer() {
        return asyncRequireImpl(10388, dependencyMap.paths).then((result) => {
          closure_0 = result.default;
          return (arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.guildId = guildId;
            return <closure_0 />;
          };
        });
      }
    });
  }
};
