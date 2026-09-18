// Module ID: 6800
// Function ID: 6801
// Dependencies: [19, 6639]
// Exports: useBottomSheetGestureHandlers

// Module 6800
import _mod19 from "module_19" /* 19 */;
import _mod6639 from "module_6639" /* 6639 */;

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod6639.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
