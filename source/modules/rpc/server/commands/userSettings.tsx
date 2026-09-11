// Module ID: 14558
// Function ID: 14559
// Name: userSettings
// Dependencies: [2025, 1074, 8425, 2]

// Module 14558 (userSettings)
import LocaleStore from "LocaleStore" /* 2025 */;

const obj = {};
obj[fn(1074).RPCCommands.USER_SETTINGS_GET_LOCALE] = {
  scope: fn(8425).OAuth2Scopes.IDENTIFY,
  handler() {
    return { locale: LocaleStore.locale };
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/userSettings.tsx");

export default obj;
