// Module ID: 15598
// Function ID: 15599
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7647, 7649, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 15598 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7649 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7647 */;

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
