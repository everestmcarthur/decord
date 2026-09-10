// Module ID: 14708
// Function ID: 14709
// Name: useCanPurchaseFrames
// Dependencies: [8275, 2]
// Exports: default, useCanViewProfileFramesInCollectiblesShop

// Module 14708 (useCanPurchaseFrames)
import CollectiblesProfileFramesExperiment from "CollectiblesProfileFramesExperiment" /* 8275 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/hooks/useCanPurchaseFrames.tsx");

export default function useCanPurchaseFrames(location) {
  return CollectiblesProfileFramesExperiment.useIsProfileFramesEnabled(location);
};
export const useCanViewProfileFramesInCollectiblesShop = function useCanViewProfileFramesInCollectiblesShop(UserProfileFrameEditButton) {
  return CollectiblesProfileFramesExperiment.useIsProfileFramesEnabled(UserProfileFrameEditButton);
};
