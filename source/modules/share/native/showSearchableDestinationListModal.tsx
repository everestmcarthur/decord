// Module ID: 11136
// Function ID: 11137
// Name: showSearchableDestinationListModal
// Dependencies: [4506, 4843, 1364, 7057, 2]
// Exports: default

// Module 11136 (showSearchableDestinationListModal)
import ChatInputUtils from "ChatInputUtils" /* 4506 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4843 */;
import size from "module_2" /* 2 */;

const useIsWindowLarge = tmp(7057);
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
