// Module ID: 8256
// Function ID: 8257
// Name: useBottomSheetRef
// Dependencies: [19, 2]
// Exports: useBottomSheetRef

// Module 8256 (useBottomSheetRef)
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("design/components/Sheet/native/useBottomSheetRef.tsx");

export const useBottomSheetRef = function useBottomSheetRef() {
  const ref = noop.useRef(null);
  const items = [ref];
  return {
    bottomSheetRef: ref,
    bottomSheetClose: noop.useCallback(() => {
      const current = ref.current;
      if (current != null) {
        current.closeActionSheet();
      }
    }, items)
  };
};
