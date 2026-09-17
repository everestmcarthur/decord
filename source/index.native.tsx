// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 14320, 16, 9, 1231, 14514, 14515, 17, 14517, 17476, 18198, 18199, 18200, 18201, 18202, 18204, 18205, 18206, 18207, 18208, 18209, 18210, 18211, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import _mod17 from "module_17" /* 17 */;
import isTTITest from "isTTITest" /* 14514 */;
import installSystrace from "installSystrace" /* 14515 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 14320 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1231 */;
import size from "module_2" /* 2 */;

let GenerateInvite = require;
let f18257 = dependencyMap;
const polyfillsEnd = TTITracker.default.imports.polyfillsEnd;
polyfillsEnd.record();
const sentryEnd = TTITracker.default.imports.sentryEnd;
sentryEnd.record();
if (isTTITest.isTTITest) {
  installSystrace.installSystrace();
}
const AppRegistry = _mod17.AppRegistry;
AppRegistry.registerComponent("Discord", () => GenerateInvite(f18257[9]).default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f18257[10]).default("Main", () => {
    closure_2(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => GenerateInvite(f18257[11]).default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f18257[10]).default("Share", () => closure_3(...closure_0));
});
GenerateInvite = "BackgroundSync";
f18257 = () => GenerateInvite(f18257[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", () => {
  closure_0 = GenerateInvite(f18257[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18257, arg0);
});
if (isTTITest.isTTITest) {
  GenerateInvite = "TTITestAction";
  f18257 = () => GenerateInvite(f18257[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", () => {
    closure_0 = GenerateInvite(f18257[12]).default;
    return (arg0) => closure_0(GenerateInvite, f18257, arg0);
  });
}
GenerateInvite = "Disconnect";
f18257 = () => GenerateInvite(f18257[15]);
AppRegistry.registerHeadlessTask("Disconnect", () => {
  closure_0 = GenerateInvite(f18257[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18257, arg0);
});
GenerateInvite = "MarkAsRead";
f18257 = () => GenerateInvite(f18257[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", () => {
  closure_0 = GenerateInvite(f18257[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18257, arg0);
});
GenerateInvite = "MuteAction";
f18257 = () => GenerateInvite(f18257[17]);
AppRegistry.registerHeadlessTask("MuteAction", () => {
  closure_0 = GenerateInvite(f18257[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18257, arg0);
});
GenerateInvite = "ToggleDeafen";
f18257 = () => GenerateInvite(f18257[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", () => {
  closure_0 = GenerateInvite(f18257[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18257, arg0);
});
GenerateInvite = "ToggleSelfMute";
f18257 = () => GenerateInvite(f18257[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", () => {
  closure_0 = GenerateInvite(f18257[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18257, arg0);
});
GenerateInvite = "DismissCallAction";
f18257 = () => GenerateInvite(f18257[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", () => {
  closure_0 = GenerateInvite(f18257[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18257, arg0);
});
GenerateInvite = "DirectReply";
f18257 = () => GenerateInvite(f18257[21]);
AppRegistry.registerHeadlessTask("DirectReply", () => {
  closure_0 = GenerateInvite(f18257[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18257, arg0);
});
GenerateInvite = "SelectVoiceChannel";
f18257 = () => GenerateInvite(f18257[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", () => {
  closure_0 = GenerateInvite(f18257[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18257, arg0);
});
GenerateInvite = "GenerateInvite";
f18257 = () => GenerateInvite(f18257[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", () => {
  closure_0 = GenerateInvite(f18257[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18257, arg0);
});
const result = size.fileFinishedImporting("index.native.tsx");
