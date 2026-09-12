// Module ID: 15570
// Function ID: 15571
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7640, 7642, 2]
// Exports: prefetchFamilyCenterAgeGroupWhen

// Module 15570 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7642 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7640 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterAgeGroupPrefetch.tsx");

export const prefetchFamilyCenterAgeGroupWhen = function prefetchFamilyCenterAgeGroupWhen(isFamilyCenterV3Enabled) {
  let tmp = isFamilyCenterV3Enabled;
  if (isFamilyCenterV3Enabled) {
    tmp = null == FamilyCenterStore.getAgeGroup();
  }
  if (tmp) {
    if (!FamilyCenterStore.isLoading()) {
      if (obj.canRefetch()) {
        FamilyCenterActionCreatorsDefault.initialPageLoad();
      }
    }
    obj = FamilyCenterStore;
  }
};
