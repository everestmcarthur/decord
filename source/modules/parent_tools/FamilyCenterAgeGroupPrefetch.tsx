// Module ID: 15699
// Function ID: 15700
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7733, 7735, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 15699 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7735 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7733 */;

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
