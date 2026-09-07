// Module ID: 11613
// Function ID: 11614
// Name: openAddMembersActionSheet
// Dependencies: [1074, 1242, 4527, 9755, 1896, 11614, 2]
// Exports: openAddMembersActionSheet, openChannelMembersActionSheet

// Module 11613 (openAddMembersActionSheet)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 1242 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/channel_permissions/native/ChannelPermissionsUtils.tsx");

export const openAddMembersActionSheet = function openAddMembersActionSheet(closure_0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = expandEventPropertiesDefault;
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Grant Channel Access" });
  const obj2 = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { channel: closure_0, canSkip: flag };
  obj2.openLazy(asyncRequireImpl(9755, dependencyMap.paths), "channel-add-members-" + closure_0.id, obj);
};
export const openChannelMembersActionSheet = function openChannelMembersActionSheet(id, guild_id) {
  let obj = expandEventPropertiesDefault;
  obj.track(AnalyticEvents.OPEN_POPOUT, { type: "Manage Channel Access" });
  const obj2 = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { channelId: id, guildId: guild_id };
  obj2.openLazy(asyncRequireImpl(11614, dependencyMap.paths), "channel-members-" + id, obj);
};
