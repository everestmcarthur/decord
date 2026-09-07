// Module ID: 17754
// Function ID: 17755
// Name: showCreateBenefitModal
// Dependencies: [17755, 4763, 17756, 1896, 17762, 2]
// Exports: showCreateBenefitModal, showEditBenefitModal, showEditEmojisModal

// Module 17754 (showCreateBenefitModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4763 from "module_4763" /* 4763 */;
import closure_3 from "resetImperatively" /* 17755 */;

require = arg1;
const GuildRoleSubscriptionBenefitEditorModal = "GuildRoleSubscriptionBenefitEditorModal";
let result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsModalActionCreators.native.tsx");

export const showCreateBenefitModal = function showCreateBenefitModal(arg0) {
  ({ guildId, listingId, type, onSave } = arg0);
  closure_3.resetImperatively();
  _modDef4763.pushLazy(asyncRequireImpl(17756, dependencyMap.paths), { benefitType: type, guildId, onSave, listingId }, GuildRoleSubscriptionBenefitEditorModal);
};
export const showEditBenefitModal = function showEditBenefitModal(benefit) {
  benefit = benefit.benefit;
  ({ guildId, listingId, onDelete, onSave } = benefit);
  const result = closure_3.initializeImperatively(benefit);
  let obj = _modDef4763;
  obj = { benefitType: benefit.ref_type, guildId, onDelete, onSave, listingId };
  obj.pushLazy(asyncRequireImpl(17756, dependencyMap.paths), obj, GuildRoleSubscriptionBenefitEditorModal);
};
export const showEditEmojisModal = function showEditEmojisModal(initialTierEmojiIds) {
  initialTierEmojiIds = initialTierEmojiIds.initialTierEmojiIds;
  ({ guildId, subscriptionRoleId, listingId, onSave } = initialTierEmojiIds);
  let obj = _modDef4763;
  obj = { guildId, subscriptionRoleId, initialTierEmojiIds: null, listingId: null, onSave: null };
  if (initialTierEmojiIds == null) {
    const _Set = Set;
    initialTierEmojiIds = new Set();
  }
  obj[2] = initialTierEmojiIds;
  obj[3] = listingId;
  obj[4] = onSave;
  obj.pushLazy(asyncRequireImpl(17762, dependencyMap.paths), obj, "GuildRoleSubscriptionEmojiEditorModal");
};
