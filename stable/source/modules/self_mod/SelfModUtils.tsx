// Module ID: 7291
// Function ID: 7292
// Name: SelfModUtils
// Dependencies: [1371, 2]
// Exports: isCurrentUserTeen

// Module 7291 (SelfModUtils)
import UserStore from "UserStore" /* 1371 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/SelfModUtils.tsx");

export const isCurrentUserTeen = function isCurrentUserTeen() {
  const currentUser = UserStore.getCurrentUser();
  let nsfwAllowed;
  if (currentUser != null) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  return false === nsfwAllowed;
};
