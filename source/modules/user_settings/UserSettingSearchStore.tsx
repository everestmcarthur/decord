// Module ID: 14694
// Function ID: 14695
// Name: zustandStore
// Dependencies: [4429, 2]

// Module 14694 (zustandStore)
import set from "set" /* 2 */;
import defaultStatesAreEqual from "defaultStatesAreEqual" /* 4429 */;

const zustandStore = defaultStatesAreEqual.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = set.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
