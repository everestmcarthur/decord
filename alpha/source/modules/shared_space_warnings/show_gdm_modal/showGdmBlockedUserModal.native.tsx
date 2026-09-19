// Module ID: 13998
// Function ID: 13999
// Name: showGdmBlockedUserModal
// Dependencies: [4723, 13999, 1980, 2]
// Exports: showGdmBlockedUserModal

// Module 13998 (showGdmBlockedUserModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/shared_space_warnings/show_gdm_modal/showGdmBlockedUserModal.native.tsx");

export const showGdmBlockedUserModal = function showGdmBlockedUserModal(arg0) {
  ({ channelId, blockedUserIds, ignoredUserIds } = arg0);
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13999, dependencyMap.paths), "gdm_blocked_user_action_sheet", { channelId, blockedUserIds, ignoredUserIds });
};
