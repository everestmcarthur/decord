// Module ID: 10328
// Function ID: 10329
// Name: useCanShowFavoritesGuildOnboarding
// Dependencies: [4297, 2011, 504, 4464, 2]
// Exports: default

// Module 10328 (useCanShowFavoritesGuildOnboarding)
import initialize from "initialize" /* 504 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4464 */;
import ActionSheetStore from "ActionSheetStore" /* 4297 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useCanShowFavoritesGuildOnboarding.native.tsx");

export default function useCanShowFavoritesGuildOnboarding() {
  const items = [SelectedChannelStore];
  const stateFromStores = initialize.useStateFromStores(items, () => null != voiceChannelId.getVoiceChannelId());
  const items1 = [ActionSheetStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => open.isOpen());
  let tmp4 = !stateFromStores;
  const isModalOpen = NavigationRouteUtils.useIsModalOpen();
  if (!stateFromStores) {
    tmp4 = !stateFromStores1;
  }
  if (tmp4) {
    tmp4 = !isModalOpen;
  }
  return tmp4;
};
