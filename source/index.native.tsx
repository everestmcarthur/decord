// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 14294, 16, 9, 1231, 14488, 14489, 17, 14491, 17379, 18078, 18079, 18080, 18081, 18082, 18084, 18085, 18086, 18087, 18088, 18089, 18090, 18091, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import _mod17 from "module_17" /* 17 */;
import isTTITest from "isTTITest" /* 14488 */;
import installSystrace from "installSystrace" /* 14489 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 14294 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1231 */;
import size from "module_2" /* 2 */;

let GenerateInvite = require;
let f18137 = dependencyMap;
const polyfillsEnd = TTITracker.default.imports.polyfillsEnd;
polyfillsEnd.record();
const sentryEnd = TTITracker.default.imports.sentryEnd;
sentryEnd.record();
if (isTTITest.isTTITest) {
  installSystrace.installSystrace();
}
const AppRegistry = _mod17.AppRegistry;
AppRegistry.registerComponent("Discord", () => GenerateInvite(f18137[9]).default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f18137[10]).default("Main", () => {
    closure_2(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => GenerateInvite(f18137[11]).default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f18137[10]).default("Share", () => closure_3(...closure_0));
});
GenerateInvite = "BackgroundSync";
f18137 = () => GenerateInvite(f18137[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", () => {
  closure_0 = GenerateInvite(f18137[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18137, arg0);
});
if (isTTITest.isTTITest) {
  GenerateInvite = "TTITestAction";
  f18137 = () => GenerateInvite(f18137[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", () => {
    closure_0 = GenerateInvite(f18137[12]).default;
    return (arg0) => closure_0(GenerateInvite, f18137, arg0);
  });
}
GenerateInvite = "Disconnect";
f18137 = () => GenerateInvite(f18137[15]);
AppRegistry.registerHeadlessTask("Disconnect", () => {
  closure_0 = GenerateInvite(f18137[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18137, arg0);
});
GenerateInvite = "MarkAsRead";
f18137 = () => GenerateInvite(f18137[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", () => {
  closure_0 = GenerateInvite(f18137[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18137, arg0);
});
GenerateInvite = "MuteAction";
f18137 = () => GenerateInvite(f18137[17]);
AppRegistry.registerHeadlessTask("MuteAction", () => {
  closure_0 = GenerateInvite(f18137[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18137, arg0);
});
GenerateInvite = "ToggleDeafen";
f18137 = () => GenerateInvite(f18137[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", () => {
  closure_0 = GenerateInvite(f18137[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18137, arg0);
});
GenerateInvite = "ToggleSelfMute";
f18137 = () => GenerateInvite(f18137[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", () => {
  closure_0 = GenerateInvite(f18137[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18137, arg0);
});
GenerateInvite = "DismissCallAction";
f18137 = () => GenerateInvite(f18137[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", () => {
  closure_0 = GenerateInvite(f18137[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18137, arg0);
});
GenerateInvite = "DirectReply";
f18137 = () => GenerateInvite(f18137[21]);
AppRegistry.registerHeadlessTask("DirectReply", () => {
  closure_0 = GenerateInvite(f18137[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18137, arg0);
});
GenerateInvite = "SelectVoiceChannel";
f18137 = () => GenerateInvite(f18137[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", () => {
  closure_0 = GenerateInvite(f18137[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18137, arg0);
});
GenerateInvite = "GenerateInvite";
f18137 = () => GenerateInvite(f18137[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", () => {
  closure_0 = GenerateInvite(f18137[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18137, arg0);
});
const result = size.fileFinishedImporting("index.native.tsx");
