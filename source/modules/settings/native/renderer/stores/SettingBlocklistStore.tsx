// Module ID: 14660
// Function ID: 14661
// Name: SettingBlocklistStore
// Dependencies: [4474, 2]

// Module 14660 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 4474 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
