// Module ID: 16581
// Function ID: 16582
// Name: openJoinRequestActionSheet
// Dependencies: [4527, 16582, 1896, 2]
// Exports: default

// Module 16581 (openJoinRequestActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;

const result = set.fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { joinRequest };
  obj.openLazy(asyncRequireImpl(16582, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};
