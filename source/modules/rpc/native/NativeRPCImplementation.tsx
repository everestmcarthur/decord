// Module ID: 14518
// Function ID: 14519
// Name: NativeRPCImplementation
// Dependencies: [4598, 1183, 1221, 14519, 14566, 14567, 14569, 14570, 14572, 14575, 14576, 14578, 9641, 2]

// Module 14518 (NativeRPCImplementation)
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 9641 */;
import commands_activitiesDefault from "commands/activities" /* 14566 */;
import authDefault from "auth" /* 14567 */;
import voiceSettingsDefault from "voiceSettings" /* 14569 */;
import unsupportedDefault from "unsupported" /* 14570 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 14572 */;
import NativeRPCServerDefault from "NativeRPCServer" /* 14578 */;
import AccessibilityStore from "AccessibilityStore" /* 4598 */;
import ThemeStore from "ThemeStore" /* 1183 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1221 */;

const merged = Object.assign(fn(14519).crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const auth = Object.assign(authDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
Object.assign(crossPlatformRPCEventHandlersDefault);
const discordEnvironmentEvents = fn(14575);
const merged6 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true));
const merged7 = Object.assign(fn(14576).voiceSettingsEventHandlers);
const obj4 = { server: NativeRPCServerDefault, commands: {}, events: {}, stores: null, transports: null, registerTransportsForEmbeddedPlatform: null };
const items = [ThemeStore, AccessibilityStore, UserSettingsProtoStore];
obj4.stores = items;
const items1 = [WebViewPostMessageTransportDefault];
obj4.transports = items1;
obj4.registerTransportsForEmbeddedPlatform = function registerTransportsForEmbeddedPlatform() {

};
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj4;
