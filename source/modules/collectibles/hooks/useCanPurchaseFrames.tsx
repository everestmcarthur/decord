// Module ID: 14686
// Function ID: 14687
// Name: useCanPurchaseFrames
// Dependencies: [8298, 2]
// Exports: default, useCanViewProfileFramesInCollectiblesShop

// Module 14686 (useCanPurchaseFrames)
import CollectiblesProfileFramesExperiment from "CollectiblesProfileFramesExperiment" /* 8298 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/hooks/useCanPurchaseFrames.tsx");

export default function useCanPurchaseFrames(location) {
  return CollectiblesProfileFramesExperiment.useIsProfileFramesEnabled(location);
};
export const useCanViewProfileFramesInCollectiblesShop = function useCanViewProfileFramesInCollectiblesShop(UserProfileFrameEditButton) {
  return CollectiblesProfileFramesExperiment.useIsProfileFramesEnabled(UserProfileFrameEditButton);
};
