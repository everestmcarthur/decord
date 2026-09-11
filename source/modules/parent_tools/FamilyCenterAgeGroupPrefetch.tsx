// Module ID: 15548
// Function ID: 15549
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7610, 7612, 2]
// Exports: prefetchFamilyCenterAgeGroupWhen

// Module 15548 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7612 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7610 */;

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
