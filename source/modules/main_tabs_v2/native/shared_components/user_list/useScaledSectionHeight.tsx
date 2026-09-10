// Module ID: 10244
// Function ID: 10245
// Name: useScaledSectionHeight
// Dependencies: [10245, 4996, 2]
// Exports: default

// Module 10244 (useScaledSectionHeight)
import useFontScale from "useFontScale" /* 4996 */;
import UsersFastListConstants from "UsersFastListConstants" /* 10245 */;
import size from "module_2" /* 2 */;

({ USERS_LIST_SECTION_HEIGHT: c2, USERS_LIST_SECTION_TEXT_HEIGHT: c3 } = UsersFastListConstants);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledSectionHeight.tsx");

export default function useScaledSectionHeight() {
  return React2 + Math.max(Math.min(useFontScale.useFontScale(), 2) * React3 - React3, 0);
};
