// Module ID: 6707
// Function ID: 6708
// Dependencies: [19, 6708]
// Exports: useBottomSheetInternal

// Module 6707
import _mod19 from "module_19" /* 19 */;
import _mod6708 from "module_6708" /* 6708 */;

const useContext = _mod19.useContext;

export const useBottomSheetInternal = function useBottomSheetInternal(arg0) {
  const tmp = useContext(_mod6708.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
};
