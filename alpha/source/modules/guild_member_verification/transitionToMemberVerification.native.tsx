// Module ID: 5695
// Function ID: 5696
// Name: transitionToMemberVerification
// Dependencies: [1980, 4544, 1074, 5696, 1101, 4546, 5697, 5739, 2]
// Exports: transitionToMemberVerification

// Module 5695 (transitionToMemberVerification)
import GuildStore from "GuildStore" /* 1980 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4544 */;

const require = fn;
const Routes = fn(1074).Routes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/transitionToMemberVerification.native.tsx");

export const transitionToMemberVerification = function transitionToMemberVerification(guildId) {
  if (obj.getIsMemberVerificationRouteDeprecated("transitionToMemberVerification")) {
    if (null != GuildStore.getGuild(guildId)) {
      tmp(1101).transitionToGuild(guildId);
    } else {
      const request = UserGuildJoinRequestStore.getRequest(guildId);
      let applicationStatus;
      if (request != null) {
        applicationStatus = request.applicationStatus;
      }
      if (tmp(4546).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
        const result = tmp(5697).openMemberVerificationPendingAlert(guildId);
        const tmpResult6 = tmp(5697);
      } else if (tmp(4546).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
        const obj2 = { guildId, canWithdraw: true };
        const result1 = tmp(5697).openMemberVerificationRejectedAlert(obj2);
        const tmpResult7 = tmp(5697);
      } else if (tmp(4546).GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
        tmp(1101).transitionToGuild(guildId);
        const tmpResult8 = tmp(1101);
      } else {
        const result2 = tmp(5739).openMemberVerificationModal(guildId);
        const tmpResult9 = tmp(5739);
      }
    }
  } else {
    tmp(1101).transitionTo(Routes.GUILD_MEMBER_VERIFICATION(guildId));
    const tmpResult10 = tmp(1101);
  }
};
