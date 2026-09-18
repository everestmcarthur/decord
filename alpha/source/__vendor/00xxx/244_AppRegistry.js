// Module ID: 244
// Function ID: 245
// Name: AppRegistry
// Dependencies: [245, 236]

// Module 244 (AppRegistry)
import componentProviderInstrumentationHook from "componentProviderInstrumentationHook" /* 245 */;
import MessageQueue from "module_236" /* 236 */;

componentProviderInstrumentationHook.registerComponent("LogBox", () => function NoOp() {
  return null;
});
global.RN$AppRegistry = componentProviderInstrumentationHook;
global.RN$SurfaceRegistry = { renderSurface: componentProviderInstrumentationHook.runApplication, setSurfaceProps: componentProviderInstrumentationHook.setSurfaceProps };
MessageQueue("AppRegistry", componentProviderInstrumentationHook);

export const AppRegistry = componentProviderInstrumentationHook;
