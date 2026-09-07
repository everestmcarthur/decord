// Module ID: 17652
// Function ID: 17653
// Dependencies: [19, 21, 7264, 16572, 16574, 2]

// Module 17652
import canReviewGuildMemberApplications from "canReviewGuildMemberApplications" /* 7264 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const memoResult = importAllResult.memo((guildId) => {
  guildId = guildId.guildId;
  return jsx(importDefault(canReviewGuildMemberApplications.useCanReviewGuildMemberApplications(guildId) ? 16572 : 16574), { guildId });
});
const result = require("set").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalMembersWrapper.tsx");

export default memoResult;
