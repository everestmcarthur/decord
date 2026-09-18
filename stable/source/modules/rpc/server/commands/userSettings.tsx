// Module ID: 14508
// Function ID: 14509
// Name: userSettings
// Dependencies: [2025, 1074, 8340, 2]

// Module 14508 (userSettings)
import LocaleStore from "LocaleStore" /* 2025 */;

const obj = {};
obj[fn(1074).RPCCommands.USER_SETTINGS_GET_LOCALE] = {
  scope: fn(8340).OAuth2Scopes.IDENTIFY,
  handler() {
    return { locale: LocaleStore.locale };
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/userSettings.tsx");

export default obj;
