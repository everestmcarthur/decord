// Module ID: 7376
// Function ID: 7377
// Name: useGuildShopVisibleInGuild
// Dependencies: [1074, 7372, 7364, 7377, 7367, 2]
// Exports: isGuildShopVisibleInGuild, useGuildShopVisibleInGuild

// Module 7376 (useGuildShopVisibleInGuild)
import Constants from "Constants" /* 1074 */;
import useRoleSubscriptionsVisibleInGuild from "useRoleSubscriptionsVisibleInGuild" /* 7364 */;
import CreatorMonetizationRestrictionsHooks from "CreatorMonetizationRestrictionsHooks" /* 7367 */;
import GuildProductsEligibility from "GuildProductsEligibility" /* 7372 */;
import useGuildShopPreviewVisible from "useGuildShopPreviewVisible" /* 7377 */;
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
