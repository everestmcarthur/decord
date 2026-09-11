// Module ID: 13946
// Function ID: 13947
// Name: RoleSubscriptionsOnboardingGuildPickerFeatureSpec
// Dependencies: [4523, 1975, 1114, 504, 7334, 7335, 4238, 2]

// Module 13946 (RoleSubscriptionsOnboardingGuildPickerFeatureSpec)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import ExperimentStore from "ExperimentStore" /* 4523 */;

require = fn;
const isGuildOwner = fn(1975).isGuildOwner;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/ui/RoleSubscriptionsOnboardingGuildPickerFeatureSpec.tsx");

export default {
  title() {
    const intl = util.intl;
    return intl.string(util.t["KzCF/6"]);
  },
  description() {
    const intl = util.intl;
    return intl.string(util.t.xMW8FH);
  },
  canCreateGuild: false,
  useIsGuildSupported() {
    const items = [ExperimentStore];
    return initialize.useStateFromStores(items, () => (guild, arg1) => {
      let result = closure_1_3(guild, arg1);
      if (result) {
        const obj2 = { guild, isOwner: true, canManageGuildRoleSubscriptions: true, isUserInCreatorMonetizationEligibleCountry: null, shouldRestrictUpdatingRoleSubscriptionSettings: null };
        const obj = closure_1_0(7334);
        obj2.isUserInCreatorMonetizationEligibleCountry = closure_1_0(7335).isUserInCreatorMonetizationEligibleCountry();
        const obj3 = closure_1_0(7335);
        obj2.shouldRestrictUpdatingRoleSubscriptionSettings = closure_1_0(4238).shouldRestrictUpdatingCreatorMonetizationSettings(guild.id);
        result = obj.canSeeGuildRoleSubscriptionSettings(obj2);
        const obj4 = closure_1_0(4238);
      }
      return result;
    }, [], initialize.statesWillNeverBeEqual);
  }
};
