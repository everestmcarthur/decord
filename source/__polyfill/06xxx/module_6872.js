// Module ID: 6872
// Function ID: 6873
// Dependencies: [19, 6711]
// Exports: useBottomSheetGestureHandlers

// Module 6872
import _mod19 from "module_19" /* 19 */;
import _mod6711 from "module_6711" /* 6711 */;

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod6711.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
