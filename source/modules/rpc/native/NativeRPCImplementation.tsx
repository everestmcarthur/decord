// Module ID: 14493
// Function ID: 14494
// Name: NativeRPCImplementation
// Dependencies: [4566, 1183, 1221, 14494, 14541, 14542, 14544, 14545, 14547, 14550, 14551, 14553, 9582, 2]

// Module 14493 (NativeRPCImplementation)
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 9582 */;
import commands_activitiesDefault from "commands/activities" /* 14541 */;
import authDefault from "auth" /* 14542 */;
import voiceSettingsDefault from "voiceSettings" /* 14544 */;
import unsupportedDefault from "unsupported" /* 14545 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 14547 */;
import NativeRPCServerDefault from "NativeRPCServer" /* 14553 */;
import AccessibilityStore from "AccessibilityStore" /* 4566 */;
import ThemeStore from "ThemeStore" /* 1183 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1221 */;

const merged = Object.assign(fn(14494).crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const auth = Object.assign(authDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
Object.assign(crossPlatformRPCEventHandlersDefault);
const discordEnvironmentEvents = fn(14550);
const merged6 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true));
const merged7 = Object.assign(fn(14551).voiceSettingsEventHandlers);
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
