// Module ID: 13739
// Function ID: 13740
// Name: showGdmBlockedUserModal
// Dependencies: [4527, 13740, 1896, 2]
// Exports: showGdmBlockedUserModal

// Module 13739 (showGdmBlockedUserModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;

const result = set.fileFinishedImporting("modules/shared_space_warnings/show_gdm_modal/showGdmBlockedUserModal.native.tsx");

export const showGdmBlockedUserModal = function showGdmBlockedUserModal(arg0) {
  ({ channelId, blockedUserIds, ignoredUserIds } = arg0);
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(13740, dependencyMap.paths), "gdm_blocked_user_action_sheet", { channelId, blockedUserIds, ignoredUserIds });
};
