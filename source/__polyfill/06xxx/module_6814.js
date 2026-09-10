// Module ID: 6814
// Function ID: 6815
// Dependencies: [19, 6653]
// Exports: useBottomSheetGestureHandlers

// Module 6814
import _mod19 from "module_19" /* 19 */;
import _mod6653 from "module_6653" /* 6653 */;

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod6653.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
