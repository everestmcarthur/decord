// Module ID: 14906
// Function ID: 14907
// Name: UserSettingSearchStore
// Dependencies: [4592, 2]

// Module 14906 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 4592 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
