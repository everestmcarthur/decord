// Module ID: 13279
// Function ID: 13280
// Name: HideFriendRequestNotesUtils
// Dependencies: [1936, 8799, 2]
// Exports: useHideFriendRequestNotes

// Module 13279 (HideFriendRequestNotesUtils)
import UserSettings from "UserSettings" /* 1936 */;
import useUserIsTeen from "useUserIsTeen" /* 8799 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/people/HideFriendRequestNotesUtils.tsx");

export const useHideFriendRequestNotes = function useHideFriendRequestNotes() {
  const HideFriendRequestNotes = UserSettings.HideFriendRequestNotes;
  const setting = HideFriendRequestNotes.useSetting();
  let userIsTeen = useUserIsTeen.useUserIsTeen();
  if (null != setting) {
    userIsTeen = setting;
  }
  return userIsTeen;
};
