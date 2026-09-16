// Module ID: 9911
// Function ID: 9912
// Name: guildEventDetailsParser
// Dependencies: [4628, 2]

// Module 9911 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 4628 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
