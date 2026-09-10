// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 14224, 16, 9, 1232, 14418, 14419, 17, 14421, 17261, 17963, 17964, 17965, 17966, 17967, 17969, 17970, 17971, 17972, 17973, 17974, 17975, 17976, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import _mod17 from "module_17" /* 17 */;
import isTTITest from "isTTITest" /* 14418 */;
import installSystrace from "installSystrace" /* 14419 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 14224 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1232 */;
import size from "module_2" /* 2 */;

let GenerateInvite = require;
let f18022 = dependencyMap;
const polyfillsEnd = TTITracker.default.imports.polyfillsEnd;
polyfillsEnd.record();
const sentryEnd = TTITracker.default.imports.sentryEnd;
sentryEnd.record();
if (isTTITest.isTTITest) {
  installSystrace.installSystrace();
}
const AppRegistry = _mod17.AppRegistry;
AppRegistry.registerComponent("Discord", () => GenerateInvite(f18022[9]).default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f18022[10]).default("Main", () => {
    closure_2(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => GenerateInvite(f18022[11]).default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f18022[10]).default("Share", () => closure_3(...closure_0));
});
GenerateInvite = "BackgroundSync";
f18022 = () => GenerateInvite(f18022[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", () => {
  closure_0 = GenerateInvite(f18022[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18022, arg0);
});
if (isTTITest.isTTITest) {
  GenerateInvite = "TTITestAction";
  f18022 = () => GenerateInvite(f18022[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", () => {
    closure_0 = GenerateInvite(f18022[12]).default;
    return (arg0) => closure_0(GenerateInvite, f18022, arg0);
  });
}
GenerateInvite = "Disconnect";
f18022 = () => GenerateInvite(f18022[15]);
AppRegistry.registerHeadlessTask("Disconnect", () => {
  closure_0 = GenerateInvite(f18022[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18022, arg0);
});
GenerateInvite = "MarkAsRead";
f18022 = () => GenerateInvite(f18022[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", () => {
  closure_0 = GenerateInvite(f18022[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18022, arg0);
});
GenerateInvite = "MuteAction";
f18022 = () => GenerateInvite(f18022[17]);
AppRegistry.registerHeadlessTask("MuteAction", () => {
  closure_0 = GenerateInvite(f18022[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18022, arg0);
});
GenerateInvite = "ToggleDeafen";
f18022 = () => GenerateInvite(f18022[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", () => {
  closure_0 = GenerateInvite(f18022[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18022, arg0);
});
GenerateInvite = "ToggleSelfMute";
f18022 = () => GenerateInvite(f18022[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", () => {
  closure_0 = GenerateInvite(f18022[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18022, arg0);
});
GenerateInvite = "DismissCallAction";
f18022 = () => GenerateInvite(f18022[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", () => {
  closure_0 = GenerateInvite(f18022[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18022, arg0);
});
GenerateInvite = "DirectReply";
f18022 = () => GenerateInvite(f18022[21]);
AppRegistry.registerHeadlessTask("DirectReply", () => {
  closure_0 = GenerateInvite(f18022[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18022, arg0);
});
GenerateInvite = "SelectVoiceChannel";
f18022 = () => GenerateInvite(f18022[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", () => {
  closure_0 = GenerateInvite(f18022[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18022, arg0);
});
GenerateInvite = "GenerateInvite";
f18022 = () => GenerateInvite(f18022[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", () => {
  closure_0 = GenerateInvite(f18022[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18022, arg0);
});
const result = size.fileFinishedImporting("index.native.tsx");
