// Module ID: 17838
// Function ID: 17839
// Name: GuildRoleSubscriptionGroupGatingModal
// Dependencies: [32, 19, 17824, 15286, 21, 17828, 1114, 17818, 2]
// Exports: default

// Module 17838 (GuildRoleSubscriptionGroupGatingModal)
import util from "util" /* 1114 */;
import FormGuildGatingModeSelectorDefault from "FormGuildGatingModeSelector" /* 17818 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 17828 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import RoleTierEditStore from "RoleTierEditStore" /* 17824 */;

require = fn;
const constants = fn(15286).GuildRoleSubscriptionsTierScenes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildRoleSubscriptionGroupGatingModal.tsx");

export default function GuildRoleSubscriptionGroupGatingModal(arg0) {
  [tmp2, tmp3] = RoleTierEditStore.useGroupIsFullGateState();
  const obj = { title: null, description: null, canProceedToNextStep: true, nextStep: null };
  const tmp = _slicedToArray(RoleTierEditStore.useGroupIsFullGateState(), 2);
  const intl = util.intl;
  obj.title = intl.string(util.t.N38nNP);
  const intl2 = util.intl;
  obj.description = intl2.string(util.t.csJWVI);
  obj.nextStep = constants.GROUP;
  const merged = Object.assign(arg0);
  obj.children = jsx(FormGuildGatingModeSelectorDefault, { isFullServerGating: tmp2, onChange: tmp3 });
  return jsx(GuildRoleSubscriptionTierEditStepDefault, { title: null, description: null, canProceedToNextStep: true, nextStep: null });
};
