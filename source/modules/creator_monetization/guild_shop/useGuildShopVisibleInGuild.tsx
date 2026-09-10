// Module ID: 7276
// Function ID: 7277
// Name: useGuildShopVisibleInGuild
// Dependencies: [1074, 7272, 7264, 7277, 7267, 2]
// Exports: isGuildShopVisibleInGuild, useGuildShopVisibleInGuild

// Module 7276 (useGuildShopVisibleInGuild)
import Constants from "Constants" /* 1074 */;
import useRoleSubscriptionsVisibleInGuild from "useRoleSubscriptionsVisibleInGuild" /* 7264 */;
import CreatorMonetizationRestrictionsHooks from "CreatorMonetizationRestrictionsHooks" /* 7267 */;
import GuildProductsEligibility from "GuildProductsEligibility" /* 7272 */;
import useGuildShopPreviewVisible from "useGuildShopPreviewVisible" /* 7277 */;
import size from "module_2" /* 2 */;

const GuildFeatures = Constants.GuildFeatures;
let result = size.fileFinishedImporting("modules/creator_monetization/guild_shop/useGuildShopVisibleInGuild.tsx");

export const useGuildShopVisibleInGuild = function useGuildShopVisibleInGuild(id) {
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const guildEligibleForGuildProducts = GuildProductsEligibility.useGuildEligibleForGuildProducts(id);
  let id1;
  if (id != null) {
    id1 = id.id;
  }
  const roleSubscriptionsVisibleInGuild = useRoleSubscriptionsVisibleInGuild.useRoleSubscriptionsVisibleInGuild(id1);
  const tmpResult = useRoleSubscriptionsVisibleInGuild;
  const guildShopPreviewVisible = useGuildShopPreviewVisible.useGuildShopPreviewVisible(id);
  const tmpResult3 = useGuildShopPreviewVisible;
  let id2;
  if (id != null) {
    id2 = id.id;
  }
  const shouldHideGuildPurchaseEntryPoints = CreatorMonetizationRestrictionsHooks.useShouldHideGuildPurchaseEntryPoints(id2).shouldHideGuildPurchaseEntryPoints;
  return false;
};
export const isGuildShopVisibleInGuild = function isGuildShopVisibleInGuild(id, arg1) {
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const result = GuildProductsEligibility.isGuildEligibleForGuildProducts(id);
  let id1;
  if (id != null) {
    id1 = id.id;
  }
  const result1 = useRoleSubscriptionsVisibleInGuild.areRoleSubscriptionsVisibleInGuild(id1, arg1);
  return false;
};
