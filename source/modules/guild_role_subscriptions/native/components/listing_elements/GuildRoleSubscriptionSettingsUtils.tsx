// Module ID: 16656
// Function ID: 16657
// Name: GuildRoleSubscriptionSettingsUtils
// Dependencies: [4272, 4881, 2]
// Exports: getCoverImageURI

// Module 16656 (GuildRoleSubscriptionSettingsUtils)
import StoreUtils from "StoreUtils" /* 4881 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4272 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionSettingsUtils.tsx");

export const getCoverImageURI = function getCoverImageURI(subscriptionsSettings) {
  const applicationIdForGuild = GuildRoleSubscriptionsStore.getApplicationIdForGuild(subscriptionsSettings.guild_id);
  let uri = "";
  if (tmp2) {
    uri = StoreUtils.getAssetURL(applicationIdForGuild, subscriptionsSettings.cover_image_asset, 1024);
  }
  return { uri };
};
