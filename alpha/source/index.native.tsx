// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 14415, 16, 9, 1231, 14609, 14610, 17, 14612, 17605, 18292, 18293, 18294, 18295, 18296, 18298, 18299, 18300, 18301, 18302, 18303, 18304, 18305, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import _mod17 from "module_17" /* 17 */;
import isTTITest from "isTTITest" /* 14609 */;
import installSystrace from "installSystrace" /* 14610 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 14415 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1231 */;
import size from "module_2" /* 2 */;

let GenerateInvite = require;
let f18351 = dependencyMap;
const polyfillsEnd = TTITracker.default.imports.polyfillsEnd;
polyfillsEnd.record();
const sentryEnd = TTITracker.default.imports.sentryEnd;
sentryEnd.record();
if (isTTITest.isTTITest) {
  installSystrace.installSystrace();
}
const AppRegistry = _mod17.AppRegistry;
AppRegistry.registerComponent("Discord", () => GenerateInvite(f18351[9]).default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f18351[10]).default("Main", () => {
    closure_2(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => GenerateInvite(f18351[11]).default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f18351[10]).default("Share", () => closure_3(...closure_0));
});
GenerateInvite = "BackgroundSync";
f18351 = () => GenerateInvite(f18351[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", () => {
  closure_0 = GenerateInvite(f18351[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18351, arg0);
});
if (isTTITest.isTTITest) {
  GenerateInvite = "TTITestAction";
  f18351 = () => GenerateInvite(f18351[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", () => {
    closure_0 = GenerateInvite(f18351[12]).default;
    return (arg0) => closure_0(GenerateInvite, f18351, arg0);
  });
}
GenerateInvite = "Disconnect";
f18351 = () => GenerateInvite(f18351[15]);
AppRegistry.registerHeadlessTask("Disconnect", () => {
  closure_0 = GenerateInvite(f18351[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18351, arg0);
});
GenerateInvite = "MarkAsRead";
f18351 = () => GenerateInvite(f18351[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", () => {
  closure_0 = GenerateInvite(f18351[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18351, arg0);
});
GenerateInvite = "MuteAction";
f18351 = () => GenerateInvite(f18351[17]);
AppRegistry.registerHeadlessTask("MuteAction", () => {
  closure_0 = GenerateInvite(f18351[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18351, arg0);
});
GenerateInvite = "ToggleDeafen";
f18351 = () => GenerateInvite(f18351[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", () => {
  closure_0 = GenerateInvite(f18351[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18351, arg0);
});
GenerateInvite = "ToggleSelfMute";
f18351 = () => GenerateInvite(f18351[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", () => {
  closure_0 = GenerateInvite(f18351[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18351, arg0);
});
GenerateInvite = "DismissCallAction";
f18351 = () => GenerateInvite(f18351[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", () => {
  closure_0 = GenerateInvite(f18351[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18351, arg0);
});
GenerateInvite = "DirectReply";
f18351 = () => GenerateInvite(f18351[21]);
AppRegistry.registerHeadlessTask("DirectReply", () => {
  closure_0 = GenerateInvite(f18351[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18351, arg0);
});
GenerateInvite = "SelectVoiceChannel";
f18351 = () => GenerateInvite(f18351[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", () => {
  closure_0 = GenerateInvite(f18351[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18351, arg0);
});
GenerateInvite = "GenerateInvite";
f18351 = () => GenerateInvite(f18351[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", () => {
  closure_0 = GenerateInvite(f18351[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18351, arg0);
});
const result = size.fileFinishedImporting("index.native.tsx");
