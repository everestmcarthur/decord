// Module ID: 14697
// Function ID: 14698
// Name: SettingBlocklistStore
// Dependencies: [4508, 2]

// Module 14697 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 4508 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
