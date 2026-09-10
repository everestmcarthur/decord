// Module ID: 5539
// Function ID: 5540
// Name: transitionToMemberVerification
// Dependencies: [1979, 4396, 1074, 5540, 1100, 4398, 5541, 5583, 2]
// Exports: transitionToMemberVerification

// Module 5539 (transitionToMemberVerification)
import GuildStore from "GuildStore" /* 1979 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4396 */;

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
      if (tmp(4398).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
        const result = tmp(5541).openMemberVerificationPendingAlert(guildId);
        const tmpResult6 = tmp(5541);
      } else if (tmp(4398).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
        const obj2 = { guildId, canWithdraw: true };
        const result1 = tmp(5541).openMemberVerificationRejectedAlert(obj2);
        const tmpResult7 = tmp(5541);
      } else if (tmp(4398).GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
        tmp(1100).transitionToGuild(guildId);
        const tmpResult8 = tmp(1100);
      } else {
        const result2 = tmp(5583).openMemberVerificationModal(guildId);
        const tmpResult9 = tmp(5583);
      }
    }
  } else {
    tmp(1100).transitionTo(Routes.GUILD_MEMBER_VERIFICATION(guildId));
    const tmpResult10 = tmp(1100);
  }
};
