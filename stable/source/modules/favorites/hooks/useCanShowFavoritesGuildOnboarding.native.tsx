// Module ID: 10244
// Function ID: 10245
// Name: useCanShowFavoritesGuildOnboarding
// Dependencies: [4251, 2011, 504, 4417, 2]
// Exports: default

// Module 10244 (useCanShowFavoritesGuildOnboarding)
import initialize from "initialize" /* 504 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4417 */;
import ActionSheetStore from "ActionSheetStore" /* 4251 */;
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
