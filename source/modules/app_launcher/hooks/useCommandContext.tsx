// Module ID: 12123
// Function ID: 12124
// Name: useCommandContext
// Dependencies: [19, 1979, 2]
// Exports: getCommandContext, useCommandContext

// Module 12123 (useCommandContext)
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/hooks/useCommandContext.tsx");

export const getCommandContext = function getCommandContext(type) {
  if ("contextless" === type.type) {
    let obj = { channel: "guild", guild: "call" };
  } else {
    obj = { channel: type.channel, guild: GuildStore.getGuild(type.channel.guild_id) };
  }
  return obj;
};
export const useCommandContext = function useCommandContext(context) {
  noop = context;
  const items = [context];
  return noop.useMemo(() => {
    if ("contextless" === type.type) {
      let obj = { channel: "guild", guild: "call" };
    } else {
      obj = { channel: tmp.channel, guild: GuildStore.getGuild(tmp.channel.guild_id) };
    }
    return obj;
  }, items);
};
