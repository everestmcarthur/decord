// Module ID: 5610
// Function ID: 5611
// Name: transitionToMemberVerification
// Dependencies: [1980, 4462, 1074, 5611, 1101, 4464, 5612, 5654, 2]
// Exports: transitionToMemberVerification

// Module 5610 (transitionToMemberVerification)
import GuildStore from "GuildStore" /* 1980 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4462 */;

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
      if (tmp(4464).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
        const result = tmp(5612).openMemberVerificationPendingAlert(guildId);
        const tmpResult6 = tmp(5612);
      } else if (tmp(4464).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
        const obj2 = { guildId, canWithdraw: true };
        const result1 = tmp(5612).openMemberVerificationRejectedAlert(obj2);
        const tmpResult7 = tmp(5612);
      } else if (tmp(4464).GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
        tmp(1101).transitionToGuild(guildId);
        const tmpResult8 = tmp(1101);
      } else {
        const result2 = tmp(5654).openMemberVerificationModal(guildId);
        const tmpResult9 = tmp(5654);
      }
    }
  } else {
    tmp(1101).transitionTo(Routes.GUILD_MEMBER_VERIFICATION(guildId));
    const tmpResult10 = tmp(1101);
  }
};
