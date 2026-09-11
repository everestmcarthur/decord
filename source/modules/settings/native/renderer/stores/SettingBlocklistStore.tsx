// Module ID: 14638
// Function ID: 14639
// Name: SettingBlocklistStore
// Dependencies: [4476, 2]

// Module 14638 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 4476 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
