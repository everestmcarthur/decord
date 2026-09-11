// Module ID: 6705
// Function ID: 6706
// Dependencies: [19, 6706]
// Exports: useBottomSheet

// Module 6705
import _mod19 from "module_19" /* 19 */;
import _mod6706 from "module_6706" /* 6706 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod6706.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
