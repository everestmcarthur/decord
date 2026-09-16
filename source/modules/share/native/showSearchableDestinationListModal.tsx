// Module ID: 11128
// Function ID: 11129
// Name: showSearchableDestinationListModal
// Dependencies: [4504, 4841, 1364, 7053, 2]
// Exports: default

// Module 11128 (showSearchableDestinationListModal)
import ChatInputUtils from "ChatInputUtils" /* 4504 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4841 */;
import size from "module_2" /* 2 */;

const useIsWindowLarge = tmp(7053);
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
