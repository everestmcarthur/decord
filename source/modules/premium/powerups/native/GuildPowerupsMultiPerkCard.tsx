// Module ID: 12667
// Function ID: 12668
// Name: GuildPowerupsMultiPerkCard
// Dependencies: [19, 4599, 21, 12644, 504, 12668, 12641, 12666, 2]
// Exports: default

// Module 12667 (GuildPowerupsMultiPerkCard)
import openGuildPowerupsMultiPerkBottomSheetDefault from "openGuildPowerupsMultiPerkBottomSheet" /* 12641 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4599 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsMultiPerkCard.tsx");

export default function GuildPowerupsMultiPerkCard(guildId) {
  guildId = guildId.guildId;
  const listing = guildId.listing;
  let badge = listing(12644)(guildId, listing);
  const items = [AccessibilityStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  costDecorator = listing(12668)({ guildId, powerups: listing.powerups });
  const items1 = [guildId, listing];
  let tmp5 = null;
  if (null != costDecorator) {
    tmp5 = null;
    if (null != badge) {
      const obj5 = { title: null, description: null, cost: null, imageUrl: null, status: null, costDecorator: null, onPress: null, badge: null };
      ({ title: obj3.title, description: obj3.description } = badge);
      obj5.cost = costDecorator.cost;
      const image = badge.image;
      obj5.imageUrl = stateFromStores ? image.staticUrl : image.animatedUrl;
      ({ status: obj3.status, costDecorator } = costDecorator);
      obj5.costDecorator = costDecorator;
      obj5.onPress = tmp4;
      badge = badge.badge;
      obj5.badge = badge;
      jsx(listing(12666), { title: null, description: null, cost: null, imageUrl: null, status: null, costDecorator: null, onPress: null, badge: null });
    }
  }
  return tmp5;
};
