// Module ID: 14634
// Function ID: 14635
// Name: DevToolsLazy
// Dependencies: [5, 19, 17, 7793, 7792, 21, 1115, 14635, 14636, 1896, 504, 14630, 15996, 2]
// Exports: default

// Module 14634 (DevToolsLazy)
import NativeKeyCommandsModuleDefault from "NativeKeyCommandsModule" /* 14635 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import DeveloperExperimentStore from "DeveloperExperimentStore" /* 7793 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7792 */;

const require = fn;
const NativeModules = fn(17).NativeModules;
const jsx = fn(21).jsx;
const PlatformUtils = fn(1115);
if (PlatformUtils.isAndroid()) {
  let keyModifierControl = NativeKeyCommandsModuleDefault.getConstants().keyModifierControl;
  const importDefaultResult = NativeKeyCommandsModuleDefault;
} else {
  keyModifierControl = NativeModules.KeyCommandsView.keyModifierControl;
}
let items = [
  {
    input: "o",
    modifierFlags: keyModifierControl,
    eventName: "keyCommandShowDevTools",
    discoverabilityTitle: "Open DevTools Panel",
    onKeyCommand() {
      return (async (arg0, value) => {
        if (c0 === 2) {
          c0 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c0 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                c1 = 1;
                c0 = 1;
                const obj4 = { value: require("asyncRequireImpl")(paths[8], paths.paths), done: false };
                return obj4;
              }
            } else if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              value.navigateToDevTools();
              c0 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp8) {
            c0 = tmp;
            throw tmp8;
          }
        }
      })();
    }
  }
];
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/DevToolsLazy.tsx");

export default function DevToolsLazy() {
  items = [DeveloperExperimentStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => isDeveloper.isDeveloper);
  const obj = stateFromStores(504);
  const tmp = stateFromStores;
  const items1 = [DevToolsSettingsStore];
  const stateFromStores1 = stateFromStores(504).useStateFromStores(items1, () => showDevWidget.showDevWidget);
  const effect = noop.useEffect(() => {
    if (obj.isIOS()) {
      DeveloperExperimentStore.addChangeListener(() => {
        NSUserDefaultsBridge = NSUserDefaultsBridge.NSUserDefaultsBridge;
        if (NSUserDefaultsBridge != null) {
          const result = NSUserDefaultsBridge.setIsDiscordDeveloper(stateFromStores);
        }
      });
    }
  });
  const obj2 = stateFromStores(504);
  const keyCommands = stateFromStores(14630).useKeyCommands(stateFromStores ? items : []);
  if (stateFromStores) {
    if (stateFromStores1) {
      return jsx(tmp(15996).default, {});
    }
  }
  return null;
};
