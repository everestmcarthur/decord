// Module ID: 14115
// Function ID: 14116
// Name: AddFriendModalActionCreators
// Dependencies: [1372, 4959, 14116, 1980, 2]

// Module 14115 (AddFriendModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("components_native/add_friend/AddFriendModalActionCreators.tsx");

export default {
  openAddFriendModalDeeplink() {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14116, dependencyMap.paths));
  },
  openAddFriendModal(sourceMetadata) {
    if (null != UserStore.getCurrentUser()) {
      const obj2 = { sourceMetadata };
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14116, dependencyMap.paths), obj2);
    }
  }
};
