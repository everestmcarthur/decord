// Module ID: 0
// Function ID: 1
// Name: Discord
// Dependencies: [1, 15, 14251, 16, 9, 1232, 14445, 14446, 17, 14448, 17310, 18010, 18011, 18012, 18013, 18014, 18016, 18017, 18018, 18019, 18020, 18021, 18022, 18023, 2]

// Module 0 (Discord)
import TTITracker from "TTITracker" /* 9 */;
import _mod17 from "module_17" /* 17 */;
import isTTITest from "isTTITest" /* 14445 */;
import installSystrace from "installSystrace" /* 14446 */;
import logAppStart from "logAppStart" /* 1 */;
import fast_connect from "fast_connect" /* 15 */;
import polyfills from "polyfills" /* 14251 */;
import checkEnv from "checkEnv" /* 16 */;
import SentryUtils from "SentryUtils" /* 1232 */;
import size from "module_2" /* 2 */;

let GenerateInvite = require;
let f18069 = dependencyMap;
const polyfillsEnd = TTITracker.default.imports.polyfillsEnd;
polyfillsEnd.record();
const sentryEnd = TTITracker.default.imports.sentryEnd;
sentryEnd.record();
if (isTTITest.isTTITest) {
  installSystrace.installSystrace();
}
const AppRegistry = _mod17.AppRegistry;
AppRegistry.registerComponent("Discord", () => GenerateInvite(f18069[9]).default);
const runnable = AppRegistry.getRunnable("Discord");
AppRegistry.registerRunnable("Discord", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f18069[10]).default("Main", () => {
    closure_2(...closure_0);
  });
});
AppRegistry.registerComponent("Share", () => GenerateInvite(f18069[11]).default);
const runnable2 = AppRegistry.getRunnable("Share");
AppRegistry.registerRunnable("Share", () => {
  GenerateInvite = [...arguments];
  return GenerateInvite(f18069[10]).default("Share", () => closure_3(...closure_0));
});
GenerateInvite = "BackgroundSync";
f18069 = () => GenerateInvite(f18069[13]);
AppRegistry.registerHeadlessTask("BackgroundSync", () => {
  closure_0 = GenerateInvite(f18069[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18069, arg0);
});
if (isTTITest.isTTITest) {
  GenerateInvite = "TTITestAction";
  f18069 = () => GenerateInvite(f18069[14]);
  AppRegistry.registerHeadlessTask("TTITestAction", () => {
    closure_0 = GenerateInvite(f18069[12]).default;
    return (arg0) => closure_0(GenerateInvite, f18069, arg0);
  });
}
GenerateInvite = "Disconnect";
f18069 = () => GenerateInvite(f18069[15]);
AppRegistry.registerHeadlessTask("Disconnect", () => {
  closure_0 = GenerateInvite(f18069[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18069, arg0);
});
GenerateInvite = "MarkAsRead";
f18069 = () => GenerateInvite(f18069[16]);
AppRegistry.registerHeadlessTask("MarkAsRead", () => {
  closure_0 = GenerateInvite(f18069[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18069, arg0);
});
GenerateInvite = "MuteAction";
f18069 = () => GenerateInvite(f18069[17]);
AppRegistry.registerHeadlessTask("MuteAction", () => {
  closure_0 = GenerateInvite(f18069[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18069, arg0);
});
GenerateInvite = "ToggleDeafen";
f18069 = () => GenerateInvite(f18069[18]);
AppRegistry.registerHeadlessTask("ToggleDeafen", () => {
  closure_0 = GenerateInvite(f18069[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18069, arg0);
});
GenerateInvite = "ToggleSelfMute";
f18069 = () => GenerateInvite(f18069[19]);
AppRegistry.registerHeadlessTask("ToggleSelfMute", () => {
  closure_0 = GenerateInvite(f18069[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18069, arg0);
});
GenerateInvite = "DismissCallAction";
f18069 = () => GenerateInvite(f18069[20]);
AppRegistry.registerHeadlessTask("DismissCallAction", () => {
  closure_0 = GenerateInvite(f18069[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18069, arg0);
});
GenerateInvite = "DirectReply";
f18069 = () => GenerateInvite(f18069[21]);
AppRegistry.registerHeadlessTask("DirectReply", () => {
  closure_0 = GenerateInvite(f18069[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18069, arg0);
});
GenerateInvite = "SelectVoiceChannel";
f18069 = () => GenerateInvite(f18069[22]);
AppRegistry.registerHeadlessTask("SelectVoiceChannel", () => {
  closure_0 = GenerateInvite(f18069[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18069, arg0);
});
GenerateInvite = "GenerateInvite";
f18069 = () => GenerateInvite(f18069[23]);
AppRegistry.registerHeadlessTask("GenerateInvite", () => {
  closure_0 = GenerateInvite(f18069[12]).default;
  return (arg0) => closure_0(GenerateInvite, f18069, arg0);
});
const result = size.fileFinishedImporting("index.native.tsx");
