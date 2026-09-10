// Module ID: 14769
// Function ID: 14770
// Name: UserSettingSearchStore
// Dependencies: [4474, 2]

// Module 14769 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 4474 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
