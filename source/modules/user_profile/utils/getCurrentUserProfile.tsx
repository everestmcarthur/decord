// Module ID: 11341
// Function ID: 11342
// Name: getCurrentUserProfile
// Dependencies: [1372, 7817, 2]
// Exports: default

// Module 11341 (getCurrentUserProfile)
import UserStore from "UserStore" /* 1372 */;
import UserProfileStore from "UserProfileStore" /* 7817 */;

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
