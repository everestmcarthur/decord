// Module ID: 12318
// Function ID: 12319
// Dependencies: [4763, 12319, 1896, 2]

// Module 12318
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4763 from "module_4763" /* 4763 */;

let c3 = "GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY";
const result = set.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    _modDef4763.pushLazy(asyncRequireImpl(12319, dependencyMap.paths), closure_0, c3);
  },
  close() {
    _modDef4763.popWithKey(c3);
  }
};
