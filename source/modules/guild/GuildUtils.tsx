// Module ID: 10373
// Function ID: 10374
// Name: guild/GuildUtils
// Dependencies: [5534, 2]
// Exports: handleJoinGuild

// Module 10373 (guild/GuildUtils)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5534 */;
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
