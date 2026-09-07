// Module ID: 14468
// Function ID: 14469
// Name: importDefaultResult1
// Dependencies: [4552, 1183, 1221, 14469, 14516, 14517, 14519, 14520, 14522, 14525, 14526, 14528, 9555, 2]

// Module 14468 (importDefaultResult1)
import _modDef9555 from "module_9555" /* 9555 */;
import RPC_LOCAL_SCOPEDefault from "RPC_LOCAL_SCOPE" /* 14516 */;
import _modDef14517 from "module_14517" /* 14517 */;
import itemsDefault from "items" /* 14519 */;
import _modDef14520 from "module_14520" /* 14520 */;
import messageEventsValidationDefault from "messageEventsValidation" /* 14522 */;
import _modDef14528 from "module_14528" /* 14528 */;
import importDefaultResult from "maybeApplyNoTextColorForLightCustomTheme" /* 4552 */;
import importDefaultResult1 from "handleThemeChange" /* 1183 */;
import RPC_AUTHENTICATED_SCOPE from "RPC_AUTHENTICATED_SCOPE" /* 14525 */;
import importDefaultResult2 from "handleConnectionClosedOrResumed" /* 1221 */;

let obj = {};
const merged = Object.assign(require("crossPlatformCommands").crossPlatformCommands);
const merged1 = Object.assign(RPC_LOCAL_SCOPEDefault);
const merged2 = Object.assign(_modDef14517);
const merged3 = Object.assign(itemsDefault);
const merged4 = Object.assign(_modDef14520);
obj = {};
const merged5 = Object.assign(messageEventsValidationDefault);
const merged6 = Object.assign(RPC_AUTHENTICATED_SCOPE.createDiscordEnvironmentEvents(true));
const merged7 = Object.assign(require("voiceSettingsEventHandlers").voiceSettingsEventHandlers);
obj = { server: _modDef14528, commands: obj, events: obj, stores: items, transports: null, registerTransportsForEmbeddedPlatform: null };
items = [importDefaultResult1, importDefaultResult, importDefaultResult2];
const items1 = [_modDef9555];
obj[4] = items1;
obj[5] = function registerTransportsForEmbeddedPlatform() {

};
const result = require("set").fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj;
