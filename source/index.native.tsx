// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 14284, 16, 9, 1232, 14478, 14479, 17, 14481, 17339, 18039, 18040, 18041, 18042, 18043, 18045, 18046, 18047, 18048, 18049, 18050, 18051, 18052, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import _mod17 from "module_17" /* 17 */;
import isTTITest from "isTTITest" /* 14478 */;
import installSystrace from "installSystrace" /* 14479 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 14284 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1232 */;
import size from "module_2" /* 2 */;

let GenerateInvite = require;
let f18098 = dependencyMap;
const polyfillsEnd = TTITracker.default.imports.polyfillsEnd;
polyfillsEnd.record();
const sentryEnd = TTITracker.default.imports.sentryEnd;
sentryEnd.record();
if (isTTITest.isTTITest) {
  installSystrace.installSystrace();
}
const AppRegistry = _mod17.AppRegistry;
AppRegistry.registerComponent("Discord", () => GenerateInvite(f18098[9]).default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f18098[10]).default("Main", () => {
    closure_2(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => GenerateInvite(f18098[11]).default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f18098[10]).default("Share", () => closure_3(...closure_0));
});
GenerateInvite = "BackgroundSync";
f18098 = () => GenerateInvite(f18098[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", () => {
  closure_0 = GenerateInvite(f18098[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18098, arg0);
});
if (isTTITest.isTTITest) {
  GenerateInvite = "TTITestAction";
  f18098 = () => GenerateInvite(f18098[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", () => {
    closure_0 = GenerateInvite(f18098[12]).default;
    return (arg0) => closure_0(GenerateInvite, f18098, arg0);
  });
}
GenerateInvite = "Disconnect";
f18098 = () => GenerateInvite(f18098[15]);
AppRegistry.registerHeadlessTask("Disconnect", () => {
  closure_0 = GenerateInvite(f18098[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18098, arg0);
});
GenerateInvite = "MarkAsRead";
f18098 = () => GenerateInvite(f18098[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", () => {
  closure_0 = GenerateInvite(f18098[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18098, arg0);
});
GenerateInvite = "MuteAction";
f18098 = () => GenerateInvite(f18098[17]);
AppRegistry.registerHeadlessTask("MuteAction", () => {
  closure_0 = GenerateInvite(f18098[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18098, arg0);
});
GenerateInvite = "ToggleDeafen";
f18098 = () => GenerateInvite(f18098[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", () => {
  closure_0 = GenerateInvite(f18098[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18098, arg0);
});
GenerateInvite = "ToggleSelfMute";
f18098 = () => GenerateInvite(f18098[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", () => {
  closure_0 = GenerateInvite(f18098[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18098, arg0);
});
GenerateInvite = "DismissCallAction";
f18098 = () => GenerateInvite(f18098[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", () => {
  closure_0 = GenerateInvite(f18098[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18098, arg0);
});
GenerateInvite = "DirectReply";
f18098 = () => GenerateInvite(f18098[21]);
AppRegistry.registerHeadlessTask("DirectReply", () => {
  closure_0 = GenerateInvite(f18098[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18098, arg0);
});
GenerateInvite = "SelectVoiceChannel";
f18098 = () => GenerateInvite(f18098[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", () => {
  closure_0 = GenerateInvite(f18098[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18098, arg0);
});
GenerateInvite = "GenerateInvite";
f18098 = () => GenerateInvite(f18098[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", () => {
  closure_0 = GenerateInvite(f18098[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18098, arg0);
});
const result = size.fileFinishedImporting("index.native.tsx");
