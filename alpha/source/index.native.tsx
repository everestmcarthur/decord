// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 14470, 16, 9, 1231, 14664, 14665, 17, 14667, 17682, 18370, 18371, 18372, 18373, 18374, 18376, 18377, 18378, 18379, 18380, 18381, 18382, 18383, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import _mod17 from "module_17" /* 17 */;
import isTTITest from "isTTITest" /* 14664 */;
import installSystrace from "installSystrace" /* 14665 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 14470 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1231 */;
import size from "module_2" /* 2 */;

let GenerateInvite = require;
let f18429 = dependencyMap;
const polyfillsEnd = TTITracker.default.imports.polyfillsEnd;
polyfillsEnd.record();
const sentryEnd = TTITracker.default.imports.sentryEnd;
sentryEnd.record();
if (isTTITest.isTTITest) {
  installSystrace.installSystrace();
}
const AppRegistry = _mod17.AppRegistry;
AppRegistry.registerComponent("Discord", () => GenerateInvite(f18429[9]).default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f18429[10]).default("Main", () => {
    closure_2(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => GenerateInvite(f18429[11]).default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f18429[10]).default("Share", () => closure_3(...closure_0));
});
GenerateInvite = "BackgroundSync";
f18429 = () => GenerateInvite(f18429[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", () => {
  closure_0 = GenerateInvite(f18429[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18429, arg0);
});
if (isTTITest.isTTITest) {
  GenerateInvite = "TTITestAction";
  f18429 = () => GenerateInvite(f18429[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", () => {
    closure_0 = GenerateInvite(f18429[12]).default;
    return (arg0) => closure_0(GenerateInvite, f18429, arg0);
  });
}
GenerateInvite = "Disconnect";
f18429 = () => GenerateInvite(f18429[15]);
AppRegistry.registerHeadlessTask("Disconnect", () => {
  closure_0 = GenerateInvite(f18429[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18429, arg0);
});
GenerateInvite = "MarkAsRead";
f18429 = () => GenerateInvite(f18429[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", () => {
  closure_0 = GenerateInvite(f18429[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18429, arg0);
});
GenerateInvite = "MuteAction";
f18429 = () => GenerateInvite(f18429[17]);
AppRegistry.registerHeadlessTask("MuteAction", () => {
  closure_0 = GenerateInvite(f18429[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18429, arg0);
});
GenerateInvite = "ToggleDeafen";
f18429 = () => GenerateInvite(f18429[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", () => {
  closure_0 = GenerateInvite(f18429[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18429, arg0);
});
GenerateInvite = "ToggleSelfMute";
f18429 = () => GenerateInvite(f18429[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", () => {
  closure_0 = GenerateInvite(f18429[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18429, arg0);
});
GenerateInvite = "DismissCallAction";
f18429 = () => GenerateInvite(f18429[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", () => {
  closure_0 = GenerateInvite(f18429[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18429, arg0);
});
GenerateInvite = "DirectReply";
f18429 = () => GenerateInvite(f18429[21]);
AppRegistry.registerHeadlessTask("DirectReply", () => {
  closure_0 = GenerateInvite(f18429[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18429, arg0);
});
GenerateInvite = "SelectVoiceChannel";
f18429 = () => GenerateInvite(f18429[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", () => {
  closure_0 = GenerateInvite(f18429[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18429, arg0);
});
GenerateInvite = "GenerateInvite";
f18429 = () => GenerateInvite(f18429[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", () => {
  closure_0 = GenerateInvite(f18429[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18429, arg0);
});
const result = size.fileFinishedImporting("index.native.tsx");
