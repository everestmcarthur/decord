// Module ID: 10982
// Function ID: 10983
// Name: showSearchableDestinationListModal
// Dependencies: [4425, 4763, 1115, 6945, 2]
// Exports: default

// Module 10982 (showSearchableDestinationListModal)
import ChatInputUtils from "ChatInputUtils" /* 4425 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import size from "module_2" /* 2 */;

const useIsWindowLarge = tmp(6945);
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
