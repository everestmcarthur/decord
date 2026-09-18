// Module ID: 8747
// Function ID: 8748
// Name: GuildBadgeImageSource
// Dependencies: [8748, 5591, 5592, 8750, 8751, 8752, 8753, 8754, 8755, 4411, 8749, 2]
// Exports: getGuildBadgeImageSource, resolveImageSource

// Module 8747 (GuildBadgeImageSource)
import shared from "shared" /* 4411 */;
import _modDef5591 from "module_5591" /* 5591 */;
import _modDef5592 from "module_5592" /* 5592 */;
import BadgeCategory from "BadgeCategory" /* 8748 */;
import GuildTraits from "GuildTraits" /* 8749 */;
import _modDef8750 from "module_8750" /* 8750 */;
import _modDef8751 from "module_8751" /* 8751 */;
import _modDef8752 from "module_8752" /* 8752 */;
import _modDef8753 from "module_8753" /* 8753 */;
import _modDef8754 from "module_8754" /* 8754 */;
import _modDef8755 from "module_8755" /* 8755 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(8748).BadgeCategory.STAFF] = { imageSource: _modDef5591 };
let obj2 = { imageSource: _modDef5591 };
badgeVariants[fn(8748).BadgeCategory.PARTNERED] = { imageSource: _modDef5592 };
const obj3 = { imageSource: _modDef5592 };
badgeVariants[fn(8748).BadgeCategory.VERIFIED] = { imageSource: _modDef5591 };
const obj4 = { imageSource: _modDef5591 };
badgeVariants[fn(8748).BadgeCategory.COMMUNITY] = { imageSource: _modDef8750, imageSourceLight: _modDef8751, premiumImageSource: _modDef8752 };
const obj5 = { imageSource: _modDef8750, imageSourceLight: _modDef8751, premiumImageSource: _modDef8752 };
badgeVariants[fn(8748).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef8753, imageSourceLight: _modDef8754, premiumImageSource: _modDef8755 };
const obj6 = { imageSource: _modDef8753, imageSourceLight: _modDef8754, premiumImageSource: _modDef8755 };
badgeVariants[fn(8748).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef5591 };
badgeVariants[fn(8748).BadgeCategory.NONE] = {};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_badge/native/GuildBadgeImageSource.tsx");

export { badgeVariants };
export const resolveImageSource = function resolveImageSource(premiumImageSource, guildTraits, arg2) {
  if (guildTraits.premium) {
    if (null != premiumImageSource.premiumImageSource) {
      let imageSource = premiumImageSource.premiumImageSource;
    }
    return imageSource;
  }
  if (obj.isThemeLight(arg2)) {
    if (null != premiumImageSource.imageSourceLight) {
      imageSource = premiumImageSource.imageSourceLight;
    }
  }
  imageSource = premiumImageSource.imageSource;
};
export const getGuildBadgeImageSource = function getGuildBadgeImageSource(guild, theme) {
  const obj = GuildTraits;
  const guildTraits = obj.getGuildTraits(guild);
  const obj2 = BadgeCategory;
  const tmp4 = obj[obj2.getBadgeCategory(obj2, guildTraits)];
  if (null == tmp4) {
    return null;
  } else {
    if (!guildTraits.premium) {
      if (tmpResult.isThemeLight(theme)) {
        if (null != tmp4.imageSourceLight) {
          let premiumImageSource = tmp4.imageSourceLight;
        }
      }
      premiumImageSource = tmp4.imageSource;
      tmpResult = shared;
    }
    premiumImageSource = tmp4.premiumImageSource;
  }
};
