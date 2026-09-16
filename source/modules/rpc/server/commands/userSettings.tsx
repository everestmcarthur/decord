// Module ID: 14622
// Function ID: 14623
// Name: userSettings
// Dependencies: [2026, 1074, 8469, 2]

// Module 14622 (userSettings)
import LocaleStore from "LocaleStore" /* 2026 */;

const obj = {};
obj[fn(1074).RPCCommands.USER_SETTINGS_GET_LOCALE] = {
  scope: fn(8469).OAuth2Scopes.IDENTIFY,
  handler() {
    return { locale: LocaleStore.locale };
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/userSettings.tsx");

export default obj;
