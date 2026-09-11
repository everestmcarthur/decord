// Module ID: 13221
// Function ID: 13222
// Name: HideFriendRequestNotesUtils
// Dependencies: [1935, 8735, 2]
// Exports: useHideFriendRequestNotes

// Module 13221 (HideFriendRequestNotesUtils)
import UserSettings from "UserSettings" /* 1935 */;
import useUserIsTeen from "useUserIsTeen" /* 8735 */;
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
