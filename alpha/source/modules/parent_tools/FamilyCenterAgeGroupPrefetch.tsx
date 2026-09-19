// Module ID: 15754
// Function ID: 15755
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7777, 7779, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 15754 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7779 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7777 */;

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
