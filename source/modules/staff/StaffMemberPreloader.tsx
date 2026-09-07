// Module ID: 17492
// Function ID: 17493
// Name: preloadStaffMembers
// Dependencies: [1979, 1371, 17493, 5520, 2]
// Exports: preloadStaffMembers

// Module 17492 (preloadStaffMembers)
import showTooManyUserGuildsAlertDefault from "showTooManyUserGuildsAlert" /* 5520 */;
import closure_2 from "createGuildRecordFromRust" /* 1979 */;
import closure_3 from "mergeGuildAvatar" /* 1371 */;
import { PRELOAD_SERVER_ID } from "PRELOAD_SERVER_ID" /* 17493 */;

const result = require("set").fileFinishedImporting("modules/staff/StaffMemberPreloader.tsx");

export const preloadStaffMembers = function preloadStaffMembers() {
  currentUser = currentUser.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  if (isStaffResult) {
    isStaffResult = null != guild.getGuild(PRELOAD_SERVER_ID);
  }
  if (isStaffResult) {
    const obj2 = showTooManyUserGuildsAlertDefault;
    const members = obj2.requestMembers(PRELOAD_SERVER_ID, "", 0, false);
  }
};
