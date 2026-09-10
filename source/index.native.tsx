// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 14273, 16, 9, 1232, 14467, 14468, 17, 14470, 17320, 18018, 18019, 18020, 18021, 18022, 18024, 18025, 18026, 18027, 18028, 18029, 18030, 18031, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import _mod17 from "module_17" /* 17 */;
import isTTITest from "isTTITest" /* 14467 */;
import installSystrace from "installSystrace" /* 14468 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 14273 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1232 */;
import size from "module_2" /* 2 */;

let GenerateInvite = require;
let f18077 = dependencyMap;
const polyfillsEnd = TTITracker.default.imports.polyfillsEnd;
polyfillsEnd.record();
const sentryEnd = TTITracker.default.imports.sentryEnd;
sentryEnd.record();
if (isTTITest.isTTITest) {
  installSystrace.installSystrace();
}
const AppRegistry = _mod17.AppRegistry;
AppRegistry.registerComponent("Discord", () => GenerateInvite(f18077[9]).default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f18077[10]).default("Main", () => {
    closure_2(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => GenerateInvite(f18077[11]).default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f18077[10]).default("Share", () => closure_3(...closure_0));
});
GenerateInvite = "BackgroundSync";
f18077 = () => GenerateInvite(f18077[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", () => {
  closure_0 = GenerateInvite(f18077[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18077, arg0);
});
if (isTTITest.isTTITest) {
  GenerateInvite = "TTITestAction";
  f18077 = () => GenerateInvite(f18077[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", () => {
    closure_0 = GenerateInvite(f18077[12]).default;
    return (arg0) => closure_0(GenerateInvite, f18077, arg0);
  });
}
GenerateInvite = "Disconnect";
f18077 = () => GenerateInvite(f18077[15]);
AppRegistry.registerHeadlessTask("Disconnect", () => {
  closure_0 = GenerateInvite(f18077[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18077, arg0);
});
GenerateInvite = "MarkAsRead";
f18077 = () => GenerateInvite(f18077[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", () => {
  closure_0 = GenerateInvite(f18077[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18077, arg0);
});
GenerateInvite = "MuteAction";
f18077 = () => GenerateInvite(f18077[17]);
AppRegistry.registerHeadlessTask("MuteAction", () => {
  closure_0 = GenerateInvite(f18077[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18077, arg0);
});
GenerateInvite = "ToggleDeafen";
f18077 = () => GenerateInvite(f18077[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", () => {
  closure_0 = GenerateInvite(f18077[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18077, arg0);
});
GenerateInvite = "ToggleSelfMute";
f18077 = () => GenerateInvite(f18077[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", () => {
  closure_0 = GenerateInvite(f18077[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18077, arg0);
});
GenerateInvite = "DismissCallAction";
f18077 = () => GenerateInvite(f18077[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", () => {
  closure_0 = GenerateInvite(f18077[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18077, arg0);
});
GenerateInvite = "DirectReply";
f18077 = () => GenerateInvite(f18077[21]);
AppRegistry.registerHeadlessTask("DirectReply", () => {
  closure_0 = GenerateInvite(f18077[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18077, arg0);
});
GenerateInvite = "SelectVoiceChannel";
f18077 = () => GenerateInvite(f18077[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", () => {
  closure_0 = GenerateInvite(f18077[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18077, arg0);
});
GenerateInvite = "GenerateInvite";
f18077 = () => GenerateInvite(f18077[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", () => {
  closure_0 = GenerateInvite(f18077[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18077, arg0);
});
const result = size.fileFinishedImporting("index.native.tsx");
