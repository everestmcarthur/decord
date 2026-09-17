// Module ID: 10489
// Function ID: 10490
// Name: guild/GuildUtils
// Dependencies: [5608, 2]
// Exports: handleJoinGuild

// Module 10489 (guild/GuildUtils)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5608 */;
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
