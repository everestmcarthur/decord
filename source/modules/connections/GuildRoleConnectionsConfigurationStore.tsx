// Module ID: 17614
// Function ID: 17615
// Name: map
// Dependencies: [1979, 504, 573, 2]

// Module 17614 (map)
import initializeDefault from "initialize" /* 504 */;
import dispatcherDefault from "dispatcher" /* 573 */;
import closure_0 from "createGuildRecordFromRust" /* 1979 */;

const map = new Map();
const Store = initializeDefault.Store;
class GuildRoleConnectionsConfigurationStore extends Store {
}
const prototype = GuildRoleConnectionsConfigurationStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_0);
};
prototype["getGuildRoleConnectionsConfiguration"] = function getGuildRoleConnectionsConfiguration(arg0) {
  return map.get(arg0);
};
GuildRoleConnectionsConfigurationStore.displayName = "GuildRoleConnectionsConfigurationStore";
const guildRoleConnectionsConfigurationStore = new GuildRoleConnectionsConfigurationStore(dispatcherDefault, {
  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function handleFetchSuccess(roleId) {
    const result = map.set(roleId.roleId, roleId.roleConnectionConfigurations);
  }
});
let result = require("set").fileFinishedImporting("modules/connections/GuildRoleConnectionsConfigurationStore.tsx");

export default guildRoleConnectionsConfigurationStore;
