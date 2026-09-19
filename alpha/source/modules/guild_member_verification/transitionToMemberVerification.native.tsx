// Module ID: 5737
// Function ID: 5738
// Name: transitionToMemberVerification
// Dependencies: [2063, 4578, 1074, 5738, 1101, 4580, 5739, 5781, 2]
// Exports: transitionToMemberVerification

// Module 5737 (transitionToMemberVerification)
import GuildStore from "GuildStore" /* 2063 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4578 */;

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
      if (tmp(4580).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
        const result = tmp(5739).openMemberVerificationPendingAlert(guildId);
        const tmpResult6 = tmp(5739);
      } else if (tmp(4580).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
        const obj2 = { guildId, canWithdraw: true };
        const result1 = tmp(5739).openMemberVerificationRejectedAlert(obj2);
        const tmpResult7 = tmp(5739);
      } else if (tmp(4580).GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
        tmp(1101).transitionToGuild(guildId);
        const tmpResult8 = tmp(1101);
      } else {
        const result2 = tmp(5781).openMemberVerificationModal(guildId);
        const tmpResult9 = tmp(5781);
      }
    }
  } else {
    tmp(1101).transitionTo(Routes.GUILD_MEMBER_VERIFICATION(guildId));
    const tmpResult10 = tmp(1101);
  }
};
