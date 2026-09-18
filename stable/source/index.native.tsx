// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 14199, 16, 9, 1232, 14393, 14394, 17, 14396, 17230, 17930, 17931, 17932, 17933, 17934, 17936, 17937, 17938, 17939, 17940, 17941, 17942, 17943, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import _mod17 from "module_17" /* 17 */;
import isTTITest from "isTTITest" /* 14393 */;
import installSystrace from "installSystrace" /* 14394 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 14199 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1232 */;
import size from "module_2" /* 2 */;

let GenerateInvite = require;
let f17989 = dependencyMap;
const polyfillsEnd = TTITracker.default.imports.polyfillsEnd;
polyfillsEnd.record();
const sentryEnd = TTITracker.default.imports.sentryEnd;
sentryEnd.record();
if (isTTITest.isTTITest) {
  installSystrace.installSystrace();
}
const AppRegistry = _mod17.AppRegistry;
AppRegistry.registerComponent("Discord", () => GenerateInvite(f17989[9]).default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f17989[10]).default("Main", () => {
    closure_2(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => GenerateInvite(f17989[11]).default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f17989[10]).default("Share", () => closure_3(...closure_0));
});
GenerateInvite = "BackgroundSync";
f17989 = () => GenerateInvite(f17989[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", () => {
  closure_0 = GenerateInvite(f17989[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17989, arg0);
});
if (isTTITest.isTTITest) {
  GenerateInvite = "TTITestAction";
  f17989 = () => GenerateInvite(f17989[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", () => {
    closure_0 = GenerateInvite(f17989[12]).default;
    return (arg0) => closure_0(GenerateInvite, f17989, arg0);
  });
}
GenerateInvite = "Disconnect";
f17989 = () => GenerateInvite(f17989[15]);
AppRegistry.registerHeadlessTask("Disconnect", () => {
  closure_0 = GenerateInvite(f17989[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17989, arg0);
});
GenerateInvite = "MarkAsRead";
f17989 = () => GenerateInvite(f17989[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", () => {
  closure_0 = GenerateInvite(f17989[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17989, arg0);
});
GenerateInvite = "MuteAction";
f17989 = () => GenerateInvite(f17989[17]);
AppRegistry.registerHeadlessTask("MuteAction", () => {
  closure_0 = GenerateInvite(f17989[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17989, arg0);
});
GenerateInvite = "ToggleDeafen";
f17989 = () => GenerateInvite(f17989[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", () => {
  closure_0 = GenerateInvite(f17989[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17989, arg0);
});
GenerateInvite = "ToggleSelfMute";
f17989 = () => GenerateInvite(f17989[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", () => {
  closure_0 = GenerateInvite(f17989[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17989, arg0);
});
GenerateInvite = "DismissCallAction";
f17989 = () => GenerateInvite(f17989[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", () => {
  closure_0 = GenerateInvite(f17989[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17989, arg0);
});
GenerateInvite = "DirectReply";
f17989 = () => GenerateInvite(f17989[21]);
AppRegistry.registerHeadlessTask("DirectReply", () => {
  closure_0 = GenerateInvite(f17989[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17989, arg0);
});
GenerateInvite = "SelectVoiceChannel";
f17989 = () => GenerateInvite(f17989[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", () => {
  closure_0 = GenerateInvite(f17989[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17989, arg0);
});
GenerateInvite = "GenerateInvite";
f17989 = () => GenerateInvite(f17989[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", () => {
  closure_0 = GenerateInvite(f17989[12]).default;
  return (arg0) => closure_0(GenerateInvite, f17989, arg0);
});
const result = size.fileFinishedImporting("index.native.tsx");
