// Module ID: 11056
// Function ID: 11057
// Name: GuildLeaderboardStatCopy
// Dependencies: [4265, 1115, 2331, 2]
// Exports: getStatName

// Module 11056 (GuildLeaderboardStatCopy)
import _modDef2331 from "module_2331" /* 2331 */;
import GuildLeaderboardTypes from "GuildLeaderboardTypes" /* 4265 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/GuildLeaderboardStatCopy.tsx");

export const getStatName = function getStatName(winningStat) {
  if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED === winningStat) {
    const obj2 = { name: null, valueLabel: null };
    const intl6 = tmp(1115).intl;
    obj2.name = intl6.string(_modDef2331["8aHNu0"]);
    const intl7 = tmp(1115).intl;
    obj2.valueLabel = intl7.string(_modDef2331.WoNIHI);
    return obj2;
  } else if (tmp(4265).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED === winningStat) {
    const obj3 = { name: null, valueLabel: null };
    const intl4 = tmp(1115).intl;
    obj3.name = intl4.string(_modDef2331.ZwDYuP);
    const intl5 = tmp(1115).intl;
    obj3.valueLabel = intl5.string(_modDef2331.hmATeU);
    return obj3;
  } else if (tmp(4265).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED === winningStat) {
    const obj4 = { name: null, valueLabel: null };
    const intl2 = tmp(1115).intl;
    obj4.name = intl2.string(_modDef2331.JeFo7p);
    const intl3 = tmp(1115).intl;
    obj4.valueLabel = intl3.string(_modDef2331.NIqIy8);
    return obj4;
  } else {
    const obj = { name: null, valueLabel: "" };
    const intl = tmp(1115).intl;
    obj.name = intl.string(_modDef2331.btBTIw);
    return obj;
  }
};
