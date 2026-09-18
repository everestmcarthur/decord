// Module ID: 10016
// Function ID: 10017
// Name: guildEventDetailsParser
// Dependencies: [4712, 2]

// Module 10016 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 4712 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
