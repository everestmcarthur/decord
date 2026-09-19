// Module ID: 14780
// Function ID: 14781
// Name: userSettings
// Dependencies: [2109, 1074, 8609, 2]

// Module 14780 (userSettings)
import LocaleStore from "LocaleStore" /* 2109 */;

const obj = {};
obj[fn(1074).RPCCommands.USER_SETTINGS_GET_LOCALE] = {
  scope: fn(8609).OAuth2Scopes.IDENTIFY,
  handler() {
    return { locale: LocaleStore.locale };
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/userSettings.tsx");

export default obj;
