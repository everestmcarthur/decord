// Module ID: 10469
// Function ID: 10470
// Name: guild/GuildUtils
// Dependencies: [5601, 2]
// Exports: handleJoinGuild

// Module 10469 (guild/GuildUtils)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5601 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/guild/GuildUtils.tsx");

export const handleJoinGuild = function handleJoinGuild(guildId) {
  importDefault = guildId;
  if (null != guildId) {
    GuildActionCreatorsDefault.joinGuild(guildId).then(() => {
      const result = GuildActionCreatorsDefault.transitionToGuildSync(closure_0);
    });
    const joinGuildResult = GuildActionCreatorsDefault.joinGuild(guildId);
  }
};
