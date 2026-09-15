// Module ID: 9903
// Function ID: 9904
// Name: guildEventDetailsParser
// Dependencies: [4629, 2]

// Module 9903 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 4629 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
