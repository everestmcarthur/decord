// Module ID: 17356
// Function ID: 17357
// Name: isGuildSelectable
// Dependencies: [1963, 4744, 7832, 4903, 2]
// Exports: default

// Module 17356 (isGuildSelectable)
import StageInstanceStore from "StageInstanceStore" /* 1963 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4744 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7832 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4903 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/isGuildSelectable.tsx");

export default function isGuildSelectable(id) {
  closure_0 = id;
  const isMutedResult = UserGuildSettingsStore.isMuted(id);
  let tmp2 = !isMutedResult;
  if (!isMutedResult) {
    let hasUnreadResult = GuildReadStateStore.hasUnread(id);
    if (!hasUnreadResult) {
      const _Object = Object;
      let someResult = Object.keys(StageInstanceStore.getStageInstancesByGuild(id)).length > 0;
      if (!someResult) {
        const allApplicationStreams = ApplicationStreamingStore.getAllApplicationStreams();
        someResult = allApplicationStreams.some((guildId) => guildId.guildId === closure_0);
      }
      hasUnreadResult = someResult;
    }
    tmp2 = hasUnreadResult;
  }
  return tmp2;
};
