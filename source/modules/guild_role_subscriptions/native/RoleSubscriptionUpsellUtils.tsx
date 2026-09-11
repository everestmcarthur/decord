// Module ID: 10389
// Function ID: 10390
// Name: RoleSubscriptionUpsellUtils
// Dependencies: [19, 21, 4952, 10390, 1896, 2]

// Module 10389 (RoleSubscriptionUpsellUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4952 */;
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
        return asyncRequireImpl(10390, dependencyMap.paths).then((result) => {
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
