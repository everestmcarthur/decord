// Module ID: 6741
// Function ID: 6742
// Dependencies: [19, 6742]
// Exports: useBottomSheet

// Module 6741
import _mod19 from "module_19" /* 19 */;
import _mod6742 from "module_6742" /* 6742 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod6742.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
