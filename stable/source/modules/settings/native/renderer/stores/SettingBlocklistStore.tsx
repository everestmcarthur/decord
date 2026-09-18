// Module ID: 14586
// Function ID: 14587
// Name: SettingBlocklistStore
// Dependencies: [4429, 2]

// Module 14586 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 4429 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
