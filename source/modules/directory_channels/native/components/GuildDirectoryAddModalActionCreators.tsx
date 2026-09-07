// Module ID: 12312
// Function ID: 12313
// Dependencies: [4763, 12313, 1896, 2]

// Module 12312
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4763 from "module_4763" /* 4763 */;

const GUILD_DIRECTORY_ADD_MODAL_KEY = "GUILD_DIRECTORY_ADD_MODAL_KEY";
const result = set.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx");

export default {
  open(closure_0) {
    _modDef4763.pushLazy(asyncRequireImpl(12313, dependencyMap.paths), closure_0, GUILD_DIRECTORY_ADD_MODAL_KEY);
  },
  close() {
    _modDef4763.popWithKey(GUILD_DIRECTORY_ADD_MODAL_KEY);
  }
};
