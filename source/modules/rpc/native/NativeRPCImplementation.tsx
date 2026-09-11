// Module ID: 14520
// Function ID: 14521
// Name: NativeRPCImplementation
// Dependencies: [4599, 1183, 1221, 14521, 14568, 14569, 14571, 14572, 14574, 14577, 14578, 14580, 9643, 2]

// Module 14520 (NativeRPCImplementation)
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 9643 */;
import commands_activitiesDefault from "commands/activities" /* 14568 */;
import authDefault from "auth" /* 14569 */;
import voiceSettingsDefault from "voiceSettings" /* 14571 */;
import unsupportedDefault from "unsupported" /* 14572 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 14574 */;
import NativeRPCServerDefault from "NativeRPCServer" /* 14580 */;
import AccessibilityStore from "AccessibilityStore" /* 4599 */;
import ThemeStore from "ThemeStore" /* 1183 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1221 */;

const merged = Object.assign(fn(14521).crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const auth = Object.assign(authDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
Object.assign(crossPlatformRPCEventHandlersDefault);
const discordEnvironmentEvents = fn(14577);
const merged6 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true));
const merged7 = Object.assign(fn(14578).voiceSettingsEventHandlers);
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
