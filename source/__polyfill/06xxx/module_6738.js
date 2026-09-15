// Module ID: 6738
// Function ID: 6739
// Dependencies: [19, 6739]
// Exports: useBottomSheet

// Module 6738
import _mod19 from "module_19" /* 19 */;
import _mod6739 from "module_6739" /* 6739 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod6739.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
