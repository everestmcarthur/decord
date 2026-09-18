// Module ID: 10583
// Function ID: 10584
// Name: guild/GuildUtils
// Dependencies: [5690, 2]
// Exports: handleJoinGuild

// Module 10583 (guild/GuildUtils)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5690 */;
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
