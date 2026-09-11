// Module ID: 8834
// Function ID: 8835
// Name: GuildBadgeImageSource
// Dependencies: [8835, 5643, 5644, 8837, 8838, 8839, 8840, 8841, 8842, 4458, 8836, 2]
// Exports: getGuildBadgeImageSource, resolveImageSource

// Module 8834 (GuildBadgeImageSource)
import shared from "shared" /* 4458 */;
import _modDef5643 from "module_5643" /* 5643 */;
import _modDef5644 from "module_5644" /* 5644 */;
import BadgeCategory from "BadgeCategory" /* 8835 */;
import GuildTraits from "GuildTraits" /* 8836 */;
import _modDef8837 from "module_8837" /* 8837 */;
import _modDef8838 from "module_8838" /* 8838 */;
import _modDef8839 from "module_8839" /* 8839 */;
import _modDef8840 from "module_8840" /* 8840 */;
import _modDef8841 from "module_8841" /* 8841 */;
import _modDef8842 from "module_8842" /* 8842 */;

require = fn;
const badgeVariants = {};
badgeVariants[fn(8835).BadgeCategory.STAFF] = { imageSource: _modDef5643 };
let obj2 = { imageSource: _modDef5643 };
badgeVariants[fn(8835).BadgeCategory.PARTNERED] = { imageSource: _modDef5644 };
const obj3 = { imageSource: _modDef5644 };
badgeVariants[fn(8835).BadgeCategory.VERIFIED] = { imageSource: _modDef5643 };
const obj4 = { imageSource: _modDef5643 };
badgeVariants[fn(8835).BadgeCategory.COMMUNITY] = { imageSource: _modDef8837, imageSourceLight: _modDef8838, premiumImageSource: _modDef8839 };
const obj5 = { imageSource: _modDef8837, imageSourceLight: _modDef8838, premiumImageSource: _modDef8839 };
badgeVariants[fn(8835).BadgeCategory.DISCOVERABLE] = { imageSource: _modDef8840, imageSourceLight: _modDef8841, premiumImageSource: _modDef8842 };
const obj6 = { imageSource: _modDef8840, imageSourceLight: _modDef8841, premiumImageSource: _modDef8842 };
badgeVariants[fn(8835).BadgeCategory.VERIFIED_AND_PARTNERED] = { imageSource: _modDef5643 };
badgeVariants[fn(8835).BadgeCategory.NONE] = {};
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
