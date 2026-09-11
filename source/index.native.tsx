// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 14249, 16, 9, 1232, 14443, 14444, 17, 14446, 17309, 18009, 18010, 18011, 18012, 18013, 18015, 18016, 18017, 18018, 18019, 18020, 18021, 18022, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import _mod17 from "module_17" /* 17 */;
import isTTITest from "isTTITest" /* 14443 */;
import installSystrace from "installSystrace" /* 14444 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 14249 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1232 */;
import size from "module_2" /* 2 */;

let GenerateInvite = require;
let f18068 = dependencyMap;
const polyfillsEnd = TTITracker.default.imports.polyfillsEnd;
polyfillsEnd.record();
const sentryEnd = TTITracker.default.imports.sentryEnd;
sentryEnd.record();
if (isTTITest.isTTITest) {
  installSystrace.installSystrace();
}
const AppRegistry = _mod17.AppRegistry;
AppRegistry.registerComponent("Discord", () => GenerateInvite(f18068[9]).default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f18068[10]).default("Main", () => {
    closure_2(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => GenerateInvite(f18068[11]).default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f18068[10]).default("Share", () => closure_3(...closure_0));
});
GenerateInvite = "BackgroundSync";
f18068 = () => GenerateInvite(f18068[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", () => {
  closure_0 = GenerateInvite(f18068[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18068, arg0);
});
if (isTTITest.isTTITest) {
  GenerateInvite = "TTITestAction";
  f18068 = () => GenerateInvite(f18068[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", () => {
    closure_0 = GenerateInvite(f18068[12]).default;
    return (arg0) => closure_0(GenerateInvite, f18068, arg0);
  });
}
GenerateInvite = "Disconnect";
f18068 = () => GenerateInvite(f18068[15]);
AppRegistry.registerHeadlessTask("Disconnect", () => {
  closure_0 = GenerateInvite(f18068[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18068, arg0);
});
GenerateInvite = "MarkAsRead";
f18068 = () => GenerateInvite(f18068[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", () => {
  closure_0 = GenerateInvite(f18068[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18068, arg0);
});
GenerateInvite = "MuteAction";
f18068 = () => GenerateInvite(f18068[17]);
AppRegistry.registerHeadlessTask("MuteAction", () => {
  closure_0 = GenerateInvite(f18068[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18068, arg0);
});
GenerateInvite = "ToggleDeafen";
f18068 = () => GenerateInvite(f18068[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", () => {
  closure_0 = GenerateInvite(f18068[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18068, arg0);
});
GenerateInvite = "ToggleSelfMute";
f18068 = () => GenerateInvite(f18068[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", () => {
  closure_0 = GenerateInvite(f18068[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18068, arg0);
});
GenerateInvite = "DismissCallAction";
f18068 = () => GenerateInvite(f18068[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", () => {
  closure_0 = GenerateInvite(f18068[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18068, arg0);
});
GenerateInvite = "DirectReply";
f18068 = () => GenerateInvite(f18068[21]);
AppRegistry.registerHeadlessTask("DirectReply", () => {
  closure_0 = GenerateInvite(f18068[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18068, arg0);
});
GenerateInvite = "SelectVoiceChannel";
f18068 = () => GenerateInvite(f18068[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", () => {
  closure_0 = GenerateInvite(f18068[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18068, arg0);
});
GenerateInvite = "GenerateInvite";
f18068 = () => GenerateInvite(f18068[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", () => {
  closure_0 = GenerateInvite(f18068[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18068, arg0);
});
const result = size.fileFinishedImporting("index.native.tsx");
