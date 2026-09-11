// Module ID: 12976
// Function ID: 12977
// Dependencies: [12888, 12891, 12890, 12896]
// Exports: addConsoleInstrumentationHandler

// Module 12976
import _mod12888 from "module_12888" /* 12888 */;
import _mod12890 from "module_12890" /* 12890 */;
import _mod12891 from "module_12891" /* 12891 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12891.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12890.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12891).GLOBAL_OBJ.console) {
        tmp(12896).fill(tmp(12891).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12890.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12888).triggerHandlers("console", { args: items, level });
            const obj3 = level(12890).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12891).GLOBAL_OBJ.console, items);
            }
          };
        });
        const tmpResult = tmp(12896);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(arg0) {
  _mod12888.addHandler("console", arg0);
  _mod12888.maybeInstrument("console", instrumentConsole);
};
