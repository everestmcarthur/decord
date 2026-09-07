// Module ID: 14508
// Function ID: 14509
// Dependencies: [2025, 1074, 8339, 2]

// Module 14508
import closure_0 from "_getSystemLocale" /* 2025 */;

let obj = {};
obj = {
  scope: require("set").OAuth2Scopes.IDENTIFY,
  handler() {
    return { locale: locale.locale };
  }
};
obj[require("ME").RPCCommands.USER_SETTINGS_GET_LOCALE] = obj;
const result = require("set").fileFinishedImporting("modules/rpc/server/commands/userSettings.tsx");

export default obj;
