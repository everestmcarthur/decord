// Module ID: 14788
// Function ID: 14789
// Name: UserSettingSearchStore
// Dependencies: [4509, 2]

// Module 14788 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 4509 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
