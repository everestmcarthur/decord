// Module ID: 14694
// Function ID: 14695
// Name: UserSettingSearchStore
// Dependencies: [4429, 2]

// Module 14694 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 4429 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
