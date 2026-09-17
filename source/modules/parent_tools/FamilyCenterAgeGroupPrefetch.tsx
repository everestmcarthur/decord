// Module ID: 15604
// Function ID: 15605
// Name: FamilyCenterAgeGroupPrefetch
// Dependencies: [7651, 7653, 2]
// Exports: prefetchFamilyCenterAgeGroup

// Module 15604 (FamilyCenterAgeGroupPrefetch)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7653 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7651 */;

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
