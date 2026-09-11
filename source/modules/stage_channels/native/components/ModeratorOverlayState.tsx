// Module ID: 9753
// Function ID: 9754
// Name: ModeratorOverlayState
// Dependencies: [1244, 1249, 4229, 2]
// Exports: useModeratorOverlayChannelState

// Module 9753 (ModeratorOverlayState)
import _mod4229 from "module_4229" /* 4229 */;
import identity from "module_1244" /* 1244 */;
import size from "module_2" /* 2 */;

let closure_2 = identity.createWithEqualityFn((arg0, arg1) => {
  closure_0 = arg0;
  dependencyMap = arg1;
  const obj = {
    overlayDismissedChannelIds: new Set(),
    dismissOverlay(arg0) {
      const overlayDismissedChannelIds = dependencyMap().overlayDismissedChannelIds;
      overlayDismissedChannelIds.add(arg0);
      overlayDismissedChannelIds(1249).batchUpdates(() => overlayDismissedChannelIds({ overlayDismissedChannelIds }));
    }
  };
  return obj;
});
const result = size.fileFinishedImporting("modules/stage_channels/native/components/ModeratorOverlayState.tsx");

export const useModeratorOverlayChannelState = function useModeratorOverlayChannelState(id) {
  closure_0 = id;
  closure_1 = closure_2((dismissOverlay) => dismissOverlay.dismissOverlay, _mod4229.shallow);
  const items = [!closure_2((overlayDismissedChannelIds) => overlayDismissedChannelIds.overlayDismissedChannelIds, _mod4229.shallow).has(id), () => closure_1(closure_0)];
  return items;
};
