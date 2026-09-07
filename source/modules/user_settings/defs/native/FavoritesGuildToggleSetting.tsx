// Module ID: 15327
// Function ID: 15328
// Name: toggle
// Dependencies: [7975, 11473, 1114, 3225, 10229, 15328, 10228, 2]

// Module 15327 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import messagesProxyDefault from "messagesProxy" /* 3225 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import getNextPositionFromChannels from "getNextPositionFromChannels" /* 10228 */;
import useFavoritesAccess from "useFavoritesAccess" /* 10229 */;
import computeIsFavoritesGuildVisibleDefault from "computeIsFavoritesGuildVisible" /* 15328 */;
import createToggle from "createToggle" /* 11473 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.OT1NK5);
  },
  parent: MobileUserSettings.MobileUserSettings.APPEARANCE,
  usePredicate() {
    return useFavoritesAccess.useFavoritesAccess("FavoritesGuildToggleSetting").hasAccess;
  },
  useValue() {
    return computeIsFavoritesGuildVisibleDefault(false);
  },
  onValueChange: getNextPositionFromChannels.setFavoritesGuildVisibilityFromSettings
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.OT1NK5);
  },
  parent: MobileUserSettings.MobileUserSettings.APPEARANCE,
  usePredicate() {
    return useFavoritesAccess.useFavoritesAccess("FavoritesGuildToggleSetting").hasAccess;
  },
  useValue() {
    return computeIsFavoritesGuildVisibleDefault(false);
  },
  onValueChange: getNextPositionFromChannels.setFavoritesGuildVisibilityFromSettings
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/FavoritesGuildToggleSetting.tsx");

export default toggle;
