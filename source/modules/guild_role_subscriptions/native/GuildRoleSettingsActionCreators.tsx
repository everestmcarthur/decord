// Module ID: 17741
// Function ID: 17742
// Name: pushTierEditScene
// Dependencies: [17732, 1074, 9068, 2]
// Exports: pushTierEditScene, pushTierTemplateSelectionScene

// Module 17741 (pushTierEditScene)
import _modDef9068 from "module_9068" /* 9068 */;
import closure_2 from "usePriceTiers" /* 17732 */;
import { GuildSettingsSections } from "ME" /* 1074 */;

const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/GuildRoleSettingsActionCreators.tsx");

export const pushTierEditScene = function pushTierEditScene(arr, arg1) {
  closure_2.resetImperatively();
  arr.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT, arg1);
  _modDef9068.setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT);
};
export const pushTierTemplateSelectionScene = function pushTierTemplateSelectionScene(arr, arg1) {
  arr.push(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION, arg1);
  _modDef9068.setSection(GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_TEMPLATE_SELECTION);
};
