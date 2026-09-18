// Module ID: 11092
// Function ID: 11093
// Name: getCurrentUserProfile
// Dependencies: [1371, 7621, 2]
// Exports: default

// Module 11092 (getCurrentUserProfile)
import UserStore from "UserStore" /* 1371 */;
import UserProfileStore from "UserProfileStore" /* 7621 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/utils/getCurrentUserProfile.tsx");

export default function getCurrentUserProfile(guildId) {
  let id = UserStore.getCurrentUser();
  if (null == id) {
    return null;
  } else if (null != guildId) {
    id = id.id;
    let guildMemberProfile = UserProfileStore.getGuildMemberProfile(id, guildId);
  } else {
    guildMemberProfile = UserProfileStore.getUserProfile(id.id);
  }
};
