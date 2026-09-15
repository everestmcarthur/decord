// Module ID: 15581
// Function ID: 15582
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7644, 7646, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 15581 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7646 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7644 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterAgeGroupPrefetch.tsx");

export const prefetchFamilyCenterAgeGroup = function prefetchFamilyCenterAgeGroup() {
  if (null == FamilyCenterStore.getAgeGroup()) {
    if (!obj.isLoading()) {
      if (obj.canRefetch()) {
        FamilyCenterActionCreatorsDefault.initialPageLoad();
      }
    }
  }
};
