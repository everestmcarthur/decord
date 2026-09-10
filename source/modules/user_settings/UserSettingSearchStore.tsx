// Module ID: 14720
// Function ID: 14721
// Name: UserSettingSearchStore
// Dependencies: [4443, 2]

// Module 14720 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 4443 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
