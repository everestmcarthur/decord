// Module ID: 14604
// Function ID: 14605
// Name: userSettings
// Dependencies: [2026, 1074, 8460, 2]

// Module 14604 (userSettings)
import LocaleStore from "LocaleStore" /* 2026 */;

const obj = {};
obj[fn(1074).RPCCommands.USER_SETTINGS_GET_LOCALE] = {
  scope: fn(8460).OAuth2Scopes.IDENTIFY,
  handler() {
    return { locale: LocaleStore.locale };
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/userSettings.tsx");

export default obj;
