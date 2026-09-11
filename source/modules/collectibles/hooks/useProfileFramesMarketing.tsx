// Module ID: 17032
// Function ID: 17033
// Name: useProfileFramesMarketing
// Dependencies: [14686, 8298, 2]
// Exports: deriveProfileFramesMarketing, getProfileFramesMarketing, useProfileFramesMarketing

// Module 17032 (useProfileFramesMarketing)
import CollectiblesProfileFramesExperimentDefault from "CollectiblesProfileFramesExperiment" /* 8298 */;
import useCanPurchaseFrames from "useCanPurchaseFrames" /* 14686 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/hooks/useProfileFramesMarketing.tsx");

export const deriveProfileFramesMarketing = function deriveProfileFramesMarketing(canViewProfileFramesInCollectiblesShop) {
  const isAnnouncementEligible = canViewProfileFramesInCollectiblesShop.canViewProfileFramesInCollectiblesShop;
  return { isAnnouncementEligible, showGiftingMarketing: isAnnouncementEligible };
};
export const useProfileFramesMarketing = function useProfileFramesMarketing(CollectiblesMobileAnnouncementActionSheet) {
  const isAnnouncementEligible = useCanPurchaseFrames.useCanViewProfileFramesInCollectiblesShop(CollectiblesMobileAnnouncementActionSheet);
  return { isAnnouncementEligible, showGiftingMarketing: isAnnouncementEligible };
};
export const getProfileFramesMarketing = function getProfileFramesMarketing(location) {
  const isAnnouncementEligible = CollectiblesProfileFramesExperimentDefault.getConfig({ location }).enableProfileFrames;
  return { isAnnouncementEligible, showGiftingMarketing: isAnnouncementEligible };
};
