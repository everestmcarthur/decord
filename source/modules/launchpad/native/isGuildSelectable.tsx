// Module ID: 17064
// Function ID: 17065
// Name: isGuildSelectable
// Dependencies: [1962, 4629, 7709, 4788, 2]
// Exports: default

// Module 17064 (isGuildSelectable)
import StageInstanceStore from "StageInstanceStore" /* 1962 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4629 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7709 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4788 */;

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
