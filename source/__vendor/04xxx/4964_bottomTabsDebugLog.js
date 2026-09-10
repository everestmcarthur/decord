// Module ID: 4964
// Function ID: 4965
// Name: bottomTabsDebugLog
// Dependencies: []
// Exports: bottomTabsDebugLog, internalEnableDetailedBottomTabsLogging

// Module 4964 (bottomTabsDebugLog)
let c0 = false;

export const bottomTabsDebugLog = function bottomTabsDebugLog() {
  const items = [...arguments];
  if (c0) {
    const _console = console;
    const items1 = [];
    HermesBuiltin.arraySpread(items, 0);
    const _console2 = console;
    HermesBuiltin.apply(items1, console);
  }
};
export function internalEnableDetailedBottomTabsLogging() {
  c0 = true;
}
