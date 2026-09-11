// Module ID: 11070
// Function ID: 11071
// Name: showSearchableDestinationListModal
// Dependencies: [4472, 4809, 1115, 7016, 2]
// Exports: default

// Module 11070 (showSearchableDestinationListModal)
import ChatInputUtils from "ChatInputUtils" /* 4472 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4809 */;
import size from "module_2" /* 2 */;

const useIsWindowLarge = tmp(7016);
const result = size.fileFinishedImporting("modules/share/native/showSearchableDestinationListModal.tsx");

export default function showSearchableDestinationListModal(promise, merged, c3) {
  ChatInputUtils.dismissKeyboard();
  const obj2 = ModalActionCreatorsDefault;
  if (!obj3.isIOS()) {
    const obj4 = { presentation: "modal" };
  } else {
    const tmpResult = useIsWindowLarge;
  }
  return obj2.pushLazy(promise, merged, c3, obj4);
};
