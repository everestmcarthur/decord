// Module ID: 14542
// Function ID: 14543
// Name: NativeRPCImplementation
// Dependencies: [4597, 1183, 1221, 14543, 14590, 14591, 14593, 14594, 14596, 14599, 14600, 14602, 9620, 2]

// Module 14542 (NativeRPCImplementation)
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 9620 */;
import commands_activitiesDefault from "commands/activities" /* 14590 */;
import authDefault from "auth" /* 14591 */;
import voiceSettingsDefault from "voiceSettings" /* 14593 */;
import unsupportedDefault from "unsupported" /* 14594 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 14596 */;
import NativeRPCServerDefault from "NativeRPCServer" /* 14602 */;
import AccessibilityStore from "AccessibilityStore" /* 4597 */;
import ThemeStore from "ThemeStore" /* 1183 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1221 */;

const merged = Object.assign(fn(14543).crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const auth = Object.assign(authDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
Object.assign(crossPlatformRPCEventHandlersDefault);
const discordEnvironmentEvents = fn(14599);
const merged6 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true));
const merged7 = Object.assign(fn(14600).voiceSettingsEventHandlers);
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
