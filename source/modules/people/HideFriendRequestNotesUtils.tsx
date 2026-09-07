// Module ID: 13125
// Function ID: 13126
// Name: useHideFriendRequestNotes
// Dependencies: [1935, 8649, 2]
// Exports: useHideFriendRequestNotes

// Module 13125 (useHideFriendRequestNotes)
import set from "set" /* 2 */;
import explicitContentFromProto from "explicitContentFromProto" /* 1935 */;
import useUserIsTeen from "useUserIsTeen" /* 8649 */;

const result = set.fileFinishedImporting("modules/people/HideFriendRequestNotesUtils.tsx");

export const useHideFriendRequestNotes = function useHideFriendRequestNotes() {
  const HideFriendRequestNotes = explicitContentFromProto.HideFriendRequestNotes;
  const setting = HideFriendRequestNotes.useSetting();
  let userIsTeen = useUserIsTeen.useUserIsTeen();
  if (null != setting) {
    userIsTeen = setting;
  }
  return userIsTeen;
};
