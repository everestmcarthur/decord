// Module ID: 14659
// Function ID: 14660
// Name: useCanPurchaseFrames
// Dependencies: [8238, 2]
// Exports: default, useCanViewProfileFramesInCollectiblesShop

// Module 14659 (useCanPurchaseFrames)
import CollectiblesProfileFramesExperiment from "CollectiblesProfileFramesExperiment" /* 8238 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/hooks/useCanPurchaseFrames.tsx");

export default function useCanPurchaseFrames(location) {
  return CollectiblesProfileFramesExperiment.useIsProfileFramesEnabled(location);
};
export const useCanViewProfileFramesInCollectiblesShop = function useCanViewProfileFramesInCollectiblesShop(UserProfileFrameEditButton) {
  return CollectiblesProfileFramesExperiment.useIsProfileFramesEnabled(UserProfileFrameEditButton);
};
