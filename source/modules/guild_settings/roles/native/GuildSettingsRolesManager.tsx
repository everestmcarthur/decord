// Module ID: 17720
// Function ID: 17721
// Name: GuildSettingsRolesManager
// Dependencies: [560, 1249, 2]
// Exports: setRoleJustCreated

// Module 17720 (GuildSettingsRolesManager)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useGuildSettingsRolesManagerState = module_560.create(() => ({ roleJustCreated: false }));
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRolesManager.tsx");

export const setRoleJustCreated = function setRoleJustCreated(roleJustCreated) {
  _require = roleJustCreated;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { roleJustCreated };
    return obj.setState(obj);
  });
};
export { useGuildSettingsRolesManagerState };
