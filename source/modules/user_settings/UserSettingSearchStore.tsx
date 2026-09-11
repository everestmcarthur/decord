// Module ID: 14743
// Function ID: 14744
// Name: UserSettingSearchStore
// Dependencies: [4476, 2]

// Module 14743 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 4476 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
