// Module ID: 17742
// Function ID: 17743
// Name: NEW_LISTING_EDIT_STATE_ID
// Dependencies: [17732, 15208, 15230, 4763, 17743, 1896, 17775, 2]
// Exports: openGroupSetupModal, openTierCreationModal

// Module 17742 (NEW_LISTING_EDIT_STATE_ID)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4763 from "module_4763" /* 4763 */;
import getRoleEmojisAll from "getRoleEmojis" /* 15230 */;
import closure_4 from "usePriceTiers" /* 17732 */;
import MAX_SUBSCRIPTION_TIERS from "MAX_SUBSCRIPTION_TIERS" /* 15208 */;

require = arg1;
({ GUILD_ROLE_SUBSCRIPTION_TIER_CREATION_KEY: c5, GUILD_ROLE_SUBSCRIPTION_GROUP_SETUP_KEY: closure_6 } = MAX_SUBSCRIPTION_TIERS);
const NEW_LISTING_EDIT_STATE_ID = "NEW_LISTING_EDIT_STATE_ID";
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsActionCreatorExtras.native.tsx");

export const NEW_LISTING_EDIT_STATE_ID = "NEW_LISTING_EDIT_STATE_ID";
export const openTierCreationModal = function openTierCreationModal(arg0) {
  closure_4.resetImperatively();
  let obj = getRoleEmojisAll;
  obj.clearEditState(NEW_LISTING_EDIT_STATE_ID);
  obj = {};
  const obj2 = _modDef4763;
  const merged = Object.assign(arg0);
  obj.editStateId = NEW_LISTING_EDIT_STATE_ID;
  obj2.pushLazy(asyncRequireImpl(17743, dependencyMap.paths), obj, closure_5);
};
export const openGroupSetupModal = function openGroupSetupModal(guildId) {
  closure_4.resetImperatively();
  let obj = getRoleEmojisAll;
  obj.clearEditState(NEW_LISTING_EDIT_STATE_ID);
  obj = { guildId, editStateId: NEW_LISTING_EDIT_STATE_ID };
  _modDef4763.pushLazy(asyncRequireImpl(17775, dependencyMap.paths), obj, closure_6);
};
