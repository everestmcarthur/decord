// Module ID: 16921
// Function ID: 16922
// Name: openJoinRequestActionSheet
// Dependencies: [4723, 16922, 1980, 2]
// Exports: default

// Module 16921 (openJoinRequestActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(16922, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, { joinRequest });
};
