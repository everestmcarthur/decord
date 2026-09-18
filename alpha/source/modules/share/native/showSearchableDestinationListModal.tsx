// Module ID: 11229
// Function ID: 11230
// Name: showSearchableDestinationListModal
// Dependencies: [4588, 4925, 1364, 7139, 2]
// Exports: default

// Module 11229 (showSearchableDestinationListModal)
import ChatInputUtils from "ChatInputUtils" /* 4588 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4925 */;
import size from "module_2" /* 2 */;

const useIsWindowLarge = tmp(7139);
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
