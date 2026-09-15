// Module ID: 11114
// Function ID: 11115
// Name: showSearchableDestinationListModal
// Dependencies: [4505, 4842, 1364, 7050, 2]
// Exports: default

// Module 11114 (showSearchableDestinationListModal)
import ChatInputUtils from "ChatInputUtils" /* 4505 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4842 */;
import size from "module_2" /* 2 */;

const useIsWindowLarge = tmp(7050);
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
