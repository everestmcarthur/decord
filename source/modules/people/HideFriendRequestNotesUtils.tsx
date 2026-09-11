// Module ID: 13223
// Function ID: 13224
// Name: HideFriendRequestNotesUtils
// Dependencies: [1935, 8737, 2]
// Exports: useHideFriendRequestNotes

// Module 13223 (HideFriendRequestNotesUtils)
import UserSettings from "UserSettings" /* 1935 */;
import useUserIsTeen from "useUserIsTeen" /* 8737 */;
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
