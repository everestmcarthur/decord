// Module ID: 14854
// Function ID: 14855
// Name: SettingBlocklistStore
// Dependencies: [4626, 2]

// Module 14854 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 4626 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
