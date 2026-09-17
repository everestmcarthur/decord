// Module ID: 14630
// Function ID: 14631
// Name: userSettings
// Dependencies: [2026, 1074, 8488, 2]

// Module 14630 (userSettings)
import LocaleStore from "LocaleStore" /* 2026 */;

const obj = {};
obj[fn(1074).RPCCommands.USER_SETTINGS_GET_LOCALE] = {
  scope: fn(8488).OAuth2Scopes.IDENTIFY,
  handler() {
    return { locale: LocaleStore.locale };
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/userSettings.tsx");

export default obj;
