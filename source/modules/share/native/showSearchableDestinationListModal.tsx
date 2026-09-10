// Module ID: 11049
// Function ID: 11050
// Name: showSearchableDestinationListModal
// Dependencies: [4470, 4808, 1115, 6995, 2]
// Exports: default

// Module 11049 (showSearchableDestinationListModal)
import ChatInputUtils from "ChatInputUtils" /* 4470 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4808 */;
import size from "module_2" /* 2 */;

const useIsWindowLarge = tmp(6995);
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
