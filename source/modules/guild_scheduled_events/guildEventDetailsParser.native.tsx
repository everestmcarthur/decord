// Module ID: 9864
// Function ID: 9865
// Name: guildEventDetailsParser
// Dependencies: [4597, 2]

// Module 9864 (guildEventDetailsParser)
import MarkupUtils from "MarkupUtils" /* 4597 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/guildEventDetailsParser.native.tsx");

export const guildEventDetailsParser = MarkupUtils.parseGuildEventDescription;
export const guildEventLocationParser = MarkupUtils.reactParserFor(MarkupUtils.guildEventLocationRules);
