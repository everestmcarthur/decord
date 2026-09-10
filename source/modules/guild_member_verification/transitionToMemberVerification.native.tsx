// Module ID: 5575
// Function ID: 5576
// Name: transitionToMemberVerification
// Dependencies: [1979, 4427, 1074, 5576, 1100, 4429, 5577, 5619, 2]
// Exports: transitionToMemberVerification

// Module 5575 (transitionToMemberVerification)
import GuildStore from "GuildStore" /* 1979 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4427 */;

const require = fn;
const Routes = fn(1074).Routes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/transitionToMemberVerification.native.tsx");

export const transitionToMemberVerification = function transitionToMemberVerification(guildId) {
  if (obj.getIsMemberVerificationRouteDeprecated("transitionToMemberVerification")) {
    if (null != GuildStore.getGuild(guildId)) {
      tmp(1100).transitionToGuild(guildId);
    } else {
      const request = UserGuildJoinRequestStore.getRequest(guildId);
      let applicationStatus;
      if (request != null) {
        applicationStatus = request.applicationStatus;
      }
      if (tmp(4429).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
        const result = tmp(5577).openMemberVerificationPendingAlert(guildId);
        const tmpResult6 = tmp(5577);
      } else if (tmp(4429).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
        const obj2 = { guildId, canWithdraw: true };
        const result1 = tmp(5577).openMemberVerificationRejectedAlert(obj2);
        const tmpResult7 = tmp(5577);
      } else if (tmp(4429).GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
        tmp(1100).transitionToGuild(guildId);
        const tmpResult8 = tmp(1100);
      } else {
        const result2 = tmp(5619).openMemberVerificationModal(guildId);
        const tmpResult9 = tmp(5619);
      }
    }
  } else {
    tmp(1100).transitionTo(Routes.GUILD_MEMBER_VERIFICATION(guildId));
    const tmpResult10 = tmp(1100);
  }
};
