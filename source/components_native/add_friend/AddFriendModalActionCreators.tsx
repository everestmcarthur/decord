// Module ID: 13855
// Function ID: 13856
// Dependencies: [1371, 4763, 13856, 1896, 2]

// Module 13855
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4763 from "module_4763" /* 4763 */;
import closure_3 from "mergeGuildAvatar" /* 1371 */;

require = arg1;
const result = require("set").fileFinishedImporting("components_native/add_friend/AddFriendModalActionCreators.tsx");

export default {
  openAddFriendModalDeeplink() {
    _modDef4763.pushLazy(asyncRequireImpl(13856, dependencyMap.paths));
  },
  openAddFriendModal(arg0) {
    if (null != currentUser.getCurrentUser()) {
      let obj = _modDef4763;
      obj = { sourceMetadata: null };
      obj[0] = arg0;
      obj.pushLazy(asyncRequireImpl(13856, dependencyMap.paths), obj);
    }
  }
};
