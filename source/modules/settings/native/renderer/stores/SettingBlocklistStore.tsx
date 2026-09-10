// Module ID: 14611
// Function ID: 14612
// Name: SettingBlocklistStore
// Dependencies: [4443, 2]

// Module 14611 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 4443 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
